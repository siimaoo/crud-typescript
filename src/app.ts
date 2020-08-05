import 'reflect-metadata';
import express from 'express';
import { router } from './routes';
import { createConnection } from 'typeorm';
import { User } from './entities/User';
import 'dotenv/config';

const app = express();

createConnection({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_REPO,
  synchronize: true,
  entities: [User],
})
  .then(connection => {
    console.log('DB Connect');
  })
  .catch(err => {
    console.log(err);
  });

app.use(express.json());
app.use(router);

export { app };
