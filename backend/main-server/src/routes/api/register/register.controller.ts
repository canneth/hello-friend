
import { RequestHandler } from 'express';
import User from '@src/models/User';

export const registerController: RequestHandler<
  {},
  {},
  { email: User['email'], password: User['password'] }
> = (req, res) => {
  // TODO: Register user.
  return res.send('Registered user!');
};