
import { RequestHandler } from 'express';
import User from '@src/database/schemas/User';
import { getAllMatchingUsers, getUserById } from './users.service';
import { censorUser } from './users.utils';

export const getUserController: RequestHandler<
  { userId?: string }
> = async (req, res) => {

  const idOfUserToGet: User['userId'] | undefined = req.params.userId;

  if (!idOfUserToGet) return res.status(400).send(`Request body is missing a userId property!`);

  try {
    const user = await getUserById(idOfUserToGet);
    if (!user) return res.status(404).send('No corresponding user found!');
    const censoredUser = censorUser(user);
    return res.status(200).send({ user: censoredUser });
  } catch (err) {
    console.log(err);
    return res.status(500).send('Error occured when fetching user!');
  }
};

export const getAllMatchingUsersController: RequestHandler<
  {},
  {},
  {},
  {
    userIds?: string;
    fields?: string;
  }
> = async (req, res) => {

  const userIds: User['userId'][] | undefined = req.query.userIds?.split(',');
  const fields: (keyof User)[] | undefined = req.query.fields?.split(',') as (keyof User)[];

  if (!userIds && !fields) return res.status(400).send('No query params provided!');

  try {
    const matchingUserList = await getAllMatchingUsers(userIds, fields);
    matchingUserList.forEach(user => censorUser(user));
    return res.status(200).send(matchingUserList);
  } catch (err) {
    console.log(err);
    return res.status(500).send('Failed to fetch matching users!');
  }
};