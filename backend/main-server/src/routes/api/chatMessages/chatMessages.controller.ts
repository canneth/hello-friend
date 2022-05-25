
import { RequestHandler } from 'express';
import { getChatMessagesInChat } from './chatMessages.service';
import Chat from '@src/database/schemas/Chat';

export const getAllMatchingChatMessagesController: RequestHandler<
  {},
  {},
  {},
  {
    chatId?: string;
    latest?: string;
  }
> = async (req, res) => {

  const chatId: Chat['chatId'] | undefined = req.query.chatId;
  const latest: boolean = req.query.latest === 'true' ? true : false;

  if (!chatId) return res.status(400).send('chatId query param must be specified!');

  try {
    const matchingChatMessages = await getChatMessagesInChat(chatId, latest);
    return res.status(200).send(matchingChatMessages);
  } catch (err) {
    console.log(err);
    return res.status(500).send('Failed to fetch chat messages!');
  }
};