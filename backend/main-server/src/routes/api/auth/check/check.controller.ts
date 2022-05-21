
import { RequestHandler } from 'express';
import User from '@src/database/schemas/User';


export const checkAuthController: RequestHandler<
  {},
  {},
  { userId: User['userId'] }
> = (req, res) => {
  // TODO: Check if userId is indeed logged in.
  return res.send('Auth checked!');
};