
import User from '@src/database/schemas/User';

declare global {
  declare namespace Express {
    interface Request {
      loggedInUserId?: User['userId'];
    }
  }
}