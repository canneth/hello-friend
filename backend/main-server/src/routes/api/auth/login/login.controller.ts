
import User from '@src/models/User';
import { RequestHandler } from 'express';


export const loginController: RequestHandler<
  {}, // Params dictionary
  {}, // Res body
  { email: User['email'], password: User['password'] } // Req body
> = (req, res) => {
  // TODO: Log user in.
  return res.send('Logged in!');
};