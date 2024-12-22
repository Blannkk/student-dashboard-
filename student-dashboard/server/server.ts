import 'dotenv/config';
import { Database } from './src/config/database.config';
import { App } from './src/config/app.config';

const startServer = async () => {
  const database = new Database();
  await database.connect();

  const app = new App();
  app.listen();
};

startServer();