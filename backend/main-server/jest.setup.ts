
import knexClient from './src/database/client';

afterAll(async () => {
  await knexClient.destroy();
});