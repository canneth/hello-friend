
import { RequestHandler } from 'express';
import User from '@root/src/database/schemas/User';
import { getUser } from './users.service';

export const getUserController: RequestHandler<
  { userId: User['userId'] }
> = async (req, res) => {

  const idOfUserToGet = req.params.userId;

  try {
    const user = await getUser(idOfUserToGet);
    return res.status(200).json(user);

  } catch (err) {
    console.log(err);
    return res.status(500).send('Error occured when fetching user!');
  }

};