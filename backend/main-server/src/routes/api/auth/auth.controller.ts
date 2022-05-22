
import { RequestHandler } from 'express';
import { generateAccessToken, verifyCredentials } from '@src/routes/api/auth/auth.service';
import { getUserByEmail } from '@src/routes/api/users/users.service';
import { ACCESS_TOKEN_COOKIE_NAME, ACCESS_TOKEN_DURATION } from '@src/globals/constants';
import User from '@src/database/schemas/User';


export const loginController: RequestHandler<
  {}, // Params dictionary
  {}, // Res body
  { email?: User['email'], password?: User['password'] } // Req body
> = async (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  if (!email) return res.status(400).send(`Request body is missing an email property!`);
  if (!password) return res.status(400).send('Request body is missing a password property!');

  try {
    const user = await getUserByEmail(email);
    if (!user) return res.status(401).send('Incorrect email or password!');
    const verified = await verifyCredentials(email, password);
    if (!verified) return res.status(401).send('Incorrect email or password!');
    const accessToken = generateAccessToken(user.userId);
    res.cookie(ACCESS_TOKEN_COOKIE_NAME, accessToken, {
      httpOnly: true,
      maxAge: ACCESS_TOKEN_DURATION
    });
    return res.status(200).send({ userId: user.userId });
  } catch (err) {
    console.log(err);
    return res.status(500).send('Error logging in!');
  }
};

export const logoutController: RequestHandler = (req, res) => {
  delete req.loggedInUserId;
  res.clearCookie(ACCESS_TOKEN_COOKIE_NAME);
  return res.status(204).send('Successfully logged out!');
};

export const verifyController: RequestHandler<
  {},
  {},
  { userId?: User['userId'] }
> = (req, res) => {
  // TODO: Check if userId is indeed logged in.
  return res.send('Auth checked!');
};