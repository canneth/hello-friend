
import { RequestHandler } from 'express';
import { addNewUser, getUserByEmail } from '@src/routes/api/users/users.service';
import User from '@root/src/database/schemas/User';

export const registerController: RequestHandler<
  {},
  {},
  { email: User['email'], password: User['password'] }
> = async (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  try {
    const existingUser = await getUserByEmail(email);
    if (existingUser) return res.status(409).send('User with this email already exists!');
    await addNewUser({ email, password });
    return res.status(201).send('User registered successfully!');
  } catch (err) {
    console.log(err);
    return res.status(500).send('Failed to register user!');
  }
};