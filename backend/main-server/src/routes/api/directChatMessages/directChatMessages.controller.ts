
import { RequestHandler } from 'express';
import User from '@src/database/schemas/User';
import { getDirectChatMessagesInvolvingUser, getLatestDirectChatMessagesInvolvingUser } from './directChatMessages.service';

export const getDirectChatMessagesController: RequestHandler<
  {
    userId?: User['userId'];
    latest?: string;
  }
> = async (req, res) => {

  const userId = req.params.userId;
  const latest = req.params.latest && (req.params.latest === 'false' ? false : true); // Expected to be a boolean

  if (!userId) return res.status(400).send('userId query param is required!');

  // TODO: Guard this controller against unauthorised access!

  if (latest) {
    const latestDirectChatMessagesInvolvingUser = await getLatestDirectChatMessagesInvolvingUser(userId);
    return res.status(200).send(latestDirectChatMessagesInvolvingUser);
  } else {
    const directChatMessagesInvolvingUser = await getDirectChatMessagesInvolvingUser(userId);
    return res.status(200).send(directChatMessagesInvolvingUser);
  }
};