
import { RequestHandler } from 'express';


export const logoutController: RequestHandler = (req, res) => {
  // TODO: Log user out.
  return res.send('Logged out!');
};