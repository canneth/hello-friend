
import { RequestHandler } from 'express';
import { decodeAccessToken } from '@src/routes/api/auth/auth.service';
import { ACCESS_TOKEN_COOKIE_NAME } from '@src/globals/constants';


export const deserializeAndAttachAuthUser: RequestHandler = (req, res, next) => {
  req.loggedInUserId = undefined;
  const accessToken: string | undefined = req.cookies[ACCESS_TOKEN_COOKIE_NAME];
  if (!accessToken) return next();
  try {
    const payload = decodeAccessToken(accessToken);
    req.loggedInUserId = payload.userId;
    return next();
  } catch (err) {
    console.log(err);
    return res.status(401).send('Access token verification failed!');
  }
};