
import knex from 'knex';

const knexClient = knex({
  client: 'pg',
  connection: (
    (() => {
      switch (process.env.NODE_ENV) {
        case 'development': {
          return {
            host: 'localhost',
            user: 'postgres',
            port: 5432,
            password: process.env.PG_DEV_DB_PASSWORD,
            database: 'dev'
          };
        }
        case 'test': {
          return {
            host: 'localhost',
            user: 'postgres',
            port: 5432,
            password: process.env.PG_TEST_DB_PASSWORD,
            database: 'test'
          };
        }
        default: {
          return {
            connectionString: process.env.DATABASE_URL,
            ssl: {
              rejectUnauthorized: false
            }
          };
        }
      }
    })()
  )
});

export default knexClient;
