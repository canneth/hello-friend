
import User from '@src/models/User';
import { RequestHandler } from 'express';


export const checkAuthController: RequestHandler<
  {},
  {},
  { userId: User['userId'] }
> = (req, res) => {
  // TODO: Check if userId is indeed logged in.
  return res.send('Auth checked!');
};