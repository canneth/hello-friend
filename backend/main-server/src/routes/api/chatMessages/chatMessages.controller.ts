
import { RequestHandler } from 'express';
import { getAllChatMessagesInChats, getChatMessagesInChat } from './chatMessages.service';
import Chat from '@src/database/schemas/Chat';

export const getAllMatchingChatMessagesController: RequestHandler<
  {},
  {},
  {},
  {
    chatIds?: string;
    latest?: string;
  }
> = async (req, res) => {

  const chatIds: Chat['chatId'][] | undefined = req.query.chatIds?.split(',') as Chat['chatId'][];
  const latest: boolean = req.query.latest === 'true' ? true : false;

  if (!chatIds) return res.status(400).send('chatIds query param must be specified!');

  try {
    const matchingChatMessages = await getAllChatMessagesInChats(chatIds, latest);
    return res.status(200).send(matchingChatMessages);
  } catch (err) {
    console.log(err);
    return res.status(500).send('Failed to fetch chat messages!');
  }
};