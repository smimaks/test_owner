import { serverInit } from './server';
import { initDbConnection } from './infra/database/dbConnection';
import { workerInit } from './workers';

export async function init() {
  await initDbConnection();
  await serverInit();
  workerInit();
}
