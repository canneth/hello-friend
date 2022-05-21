
import User from '@src/database/schemas/User';
import jwt from 'jsonwebtoken';

export function generateAccessToken(userId: User['userId']) {
  const accessToken = jwt.sign({ userId, r: Math.random() }, process.env.ACCESS_TOKEN_SECRET!);
  return accessToken;
}

export function decodeAccessToken(accessToken: string) {
  const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET!);
  return payload;
}