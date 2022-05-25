
import { RequestHandler } from 'express';
import User from '@src/database/schemas/User';
import { getAllChatMembershipsOfUsers } from './chatMemberships.service';

export const getAllMatchingChatMembershipsController: RequestHandler<
  {},
  {},
  {},
  {
    userIds?: string;
  }
> = async (req, res) => {

  const userIds: User['userId'][] | undefined = req.query.userIds?.split(',') as User['userId'][];

  if (!userIds) return res.status(400).send('userIds query param must be specified!');

  try {
    const matchingChatMemberships = await getAllChatMembershipsOfUsers(userIds);
    return res.status(200).send(matchingChatMemberships);
  } catch (err) {
    console.log(err);
    return res.status(500).send('Failed to fetch chat memberships!');
  }
};