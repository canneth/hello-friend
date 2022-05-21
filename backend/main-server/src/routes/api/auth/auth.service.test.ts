
import jwt from 'jsonwebtoken';
import { decodeAccessToken, generateAccessToken } from './auth.service';


describe('generateAccessToken(userId)', () => {
  it('returns a JWT whose payload contains userId', () => {
    /* Setup */
    const userId = 'someUserId';

    /* Execute */
    const generatedToken = generateAccessToken(userId);

    /* Test */
    const decodedPayload = jwt.verify(generatedToken, process.env.ACCESS_TOKEN_SECRET!);
    expect(decodedPayload).toHaveProperty('userId', userId);
  });
});

describe('decodeAccessToken(accessToken)', () => {
  it('returns the decoded payload of the accessToken', () => {
    /* Setup */
    const testPayload = {
      someString: 'someVal',
      someNum: 5
    };
    const accessToken = jwt.sign(testPayload, process.env.ACCESS_TOKEN_SECRET!);

    /* Execute */
    const decodedPayload = decodeAccessToken(accessToken);

    /* Test */
    expect(decodedPayload).toMatchObject(testPayload);
  });
});