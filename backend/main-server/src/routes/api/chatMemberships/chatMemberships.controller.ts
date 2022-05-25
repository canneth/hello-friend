
import { RequestHandler } from 'express';
import User from '@src/database/schemas/User';
import { getAllChatMembershipsOfUsers, getAllChatMembershipsWithIds } from './chatMemberships.service';
import Chat from '@src/database/schemas/Chat';

export const getAllMatchingChatMembershipsController: RequestHandler<
  {},
  {},
  {},
  {
    userIds?: string;
    chatIds?: string;
    excludeUserIds?: string;
  }
> = async (req, res) => {

  const userIds: User['userId'][] | undefined = req.query.userIds?.split(',') as User['userId'][];
  const chatIds: Chat['chatId'][] | undefined = req.query.chatIds?.split(',') as Chat['chatId'][];
  const excludeUserIds: User['userId'][] | undefined = req.query.excludeUserIds?.split(',') as User['userId'][];

  if (!userIds && !chatIds) return res.status(400).send('Either userIds or chatIds query param must be specified!');
  if (userIds && chatIds) return res.status(400).send('Specify only either userIds or chatIds as query params, not both!');

  try {
    if (userIds) {
      const matchingChatMemberships = await getAllChatMembershipsOfUsers(userIds);
      if (excludeUserIds) {
        const filteredChatMemberships = matchingChatMemberships.filter(membership => !excludeUserIds.includes(membership.userId));
        return res.status(200).send(filteredChatMemberships);
      }
      return res.status(200).send(matchingChatMemberships);

    }
    if (chatIds) {
      const matchingChatMemberships = await getAllChatMembershipsWithIds(chatIds);
      if (excludeUserIds) {
        const filteredChatMemberships = matchingChatMemberships.filter(membership => !excludeUserIds.includes(membership.userId));
        return res.status(200).send(filteredChatMemberships);
      }
      return res.status(200).send(matchingChatMemberships);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send('Failed to fetch chat memberships!');
  }
};