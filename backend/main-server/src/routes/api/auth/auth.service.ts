
import User from '@src/database/schemas/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { getUserByEmail } from '@src/routes/api/users/users.service';

export function generateAccessToken(userId: User['userId']) {
  const accessToken = jwt.sign({ userId, r: Math.random() }, process.env.ACCESS_TOKEN_SECRET!);
  return accessToken;
}

export function decodeAccessToken(accessToken: string) {
  const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET!);
  return payload;
}

export async function verifyCredentials(email: User['email'], password: User['password']) {
  const user = await getUserByEmail(email);
  if (!user) return false;
  const passwordsMatch = await bcrypt.compare(password, user.password);
  return passwordsMatch;
}