
import { RequestHandler } from 'express';
import User from '@root/src/database/schemas/User';
import { getUserById } from './users.service';
import { censorUser } from './users.utils';

export const getUserController: RequestHandler<
  { userId: User['userId'] }
> = async (req, res) => {

  const idOfUserToGet = req.params.userId;

  try {
    const user = await getUserById(idOfUserToGet);
    if (!user) return res.status(404).send('No corresponding user found!');
    const censoredUser = censorUser(user);
    return res.status(200).send(censoredUser);
  } catch (err) {
    console.log(err);
    return res.status(500).send('Error occured when fetching user!');
  }
};