
import { RequestHandler } from 'express';
import { getAllChatsWithIds } from './chats.service';
import Chat from '@src/database/schemas/Chat';

export const getAllMatchingChatsController: RequestHandler<
  {},
  {},
  {},
  {
    chatIds?: string;
  }
> = async (req, res) => {

  const chatIds: Chat['chatId'][] | undefined = req.query.chatIds?.split(',') as Chat['chatId'][];

  if (!chatIds) return res.status(400).send('chatIds query param must be specified!');

  try {
    const matchingChatMemberships = await getAllChatsWithIds(chatIds);
    return res.status(200).send(matchingChatMemberships);
  } catch (err) {
    console.log(err);
    return res.status(500).send('Failed to fetch chats!');
  }
};