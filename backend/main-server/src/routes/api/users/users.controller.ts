
import { RequestHandler } from 'express';
import User from '@root/src/database/schemas/User';
import { getUserById } from './users.service';

export const getUserController: RequestHandler<
  { userId: User['userId'] }
> = async (req, res) => {

  const idOfUserToGet = req.params.userId;

  try {
    const user = await getUserById(idOfUserToGet);
    return res.status(200).send(user);

  } catch (err) {
    console.log(err);
    return res.status(500).send('Error occured when fetching user!');
  }

};