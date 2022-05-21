
import { RequestHandler } from 'express';
import { generateAccessToken, verifyCredentials } from '@src/routes/api/auth/auth.service';
import { getUserByEmail } from '@src/routes/api/users/users.service';
import User from '@src/database/schemas/User';

export const ACCESS_TOKEN_DURATION = 24 * 60 * 60 * 1000; // 1 day.

export const loginController: RequestHandler<
  {}, // Params dictionary
  {}, // Res body
  { email: User['email'], password: User['password'] } // Req body
> = async (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await getUserByEmail(email);
    if (!user) return res.status(401).send('Incorrect email or password!');
    const verified = await verifyCredentials(email, password);
    if (!verified) return res.status(401).send('Incorrect email or password!');
    const accessToken = generateAccessToken(user.userId);
    res.cookie('hellofriend_accesstoken', accessToken, {
      httpOnly: true,
      maxAge: ACCESS_TOKEN_DURATION
    });
    return res.status(200).send({ userId: user.userId, duration: ACCESS_TOKEN_DURATION });
  } catch (err) {
    console.log(err);
    return res.status(500).send('Error logging in!');
  }
};