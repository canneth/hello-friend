
import { ACCESS_TOKEN_COOKIE_NAME } from '@src/globals/constants';
import { RequestHandler } from 'express';


export const logoutController: RequestHandler = (req, res) => {
  delete req.loggedInUserId;
  res.clearCookie(ACCESS_TOKEN_COOKIE_NAME);
  return res.status(204).send('Successfully logged out!');
};