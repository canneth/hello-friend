
import { RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import { addNewUser, getUserByEmail } from '@src/routes/api/users/users.service';
import User from '@src/database/schemas/User';

export const registerController: RequestHandler<
  {},
  {},
  {
    email?: string;
    password?: string;
  }
> = async (req, res) => {

  const email: User['email'] | undefined = req.body.email;
  const password: User['password'] | undefined = req.body.password;

  if (!email) return res.status(400).send(`Request body is missing an email property!`);
  if (!password) return res.status(400).send('Request body is missing a password property!');

  try {
    const existingUser = await getUserByEmail(email);
    if (existingUser) return res.status(409).send('User with this email already exists!');
    const hashedPassword = await bcrypt.hash(password, 10);
    await addNewUser({ email, password: hashedPassword });
    return res.status(201).send('User registered successfully!');
  } catch (err) {
    console.log(err);
    return res.status(500).send('Failed to register user!');
  }
};