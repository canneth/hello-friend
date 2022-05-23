
import { RequestHandler } from 'express';
import User from '@src/database/schemas/User';
import { getDirectChatMessagesInvolvingUser, getLatestDirectChatMessagesInvolvingUser } from './directChatMessages.service';

export const getDirectChatMessagesController: RequestHandler<
  {},
  {},
  {},
  {
    involvedUserId?: User['userId'];
    latest?: string;
  }
> = async (req, res) => {

  const involvedUserId = req.query.involvedUserId;
  const latest = req.query.latest && (req.query.latest === 'false' ? false : true); // Expected to be a boolean

  if (!involvedUserId) return res.status(400).send('involvedUserId query param is required!');

  // TODO: Guard this controller against unauthorised access!

  if (latest) {
    const latestDirectChatMessagesInvolvingUser = await getLatestDirectChatMessagesInvolvingUser(involvedUserId);
    return res.status(200).send(latestDirectChatMessagesInvolvingUser);
  } else {
    const directChatMessagesInvolvingUser = await getDirectChatMessagesInvolvingUser(involvedUserId);
    return res.status(200).send(directChatMessagesInvolvingUser);
  }
};