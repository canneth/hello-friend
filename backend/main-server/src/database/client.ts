
import knex from 'knex';

const knexClient = knex({
  client: 'pg',
  connection: (
    process.env.NODE_ENV === 'development'
      ? {
        host: 'localhost',
        user: 'postgres',
        port: 5432,
        password: process.env.PG_DB_PASSWORD,
        database: 'postgres'
      }
      : {
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
      }
  )
});

export default knexClient;
