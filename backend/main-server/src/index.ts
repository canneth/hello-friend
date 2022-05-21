
import 'dotenv/config';
import '@src/import-aliases/config';

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import apiRouter from '@src/routes/api/api.router';
import { deserializeAndAttachAuthUser } from '@src/middleware/auth';

// Create app
const app = express();

// Register middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: [process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://hello-friend-chat.vercel.app/']
}));
app.use(deserializeAndAttachAuthUser);

// Register routes
app.use('/api', apiRouter);

// Start server
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Main server listening on port ${port}`);
});