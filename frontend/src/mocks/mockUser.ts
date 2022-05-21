
import type User from '@/schemas/User';

const dtmCreated = (new Date()).toISOString();

const mockUser: User = {
  userId: 'someUserId',
  email: 'canneth@canneth.com.sg',
  handle: 'cygwin',
  password: 'somePassword',
  name: 'Canneth',
  avatarSrc: null,
  dtmCreated: dtmCreated
};

export default mockUser;