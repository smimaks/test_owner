import pg from 'pg';
import { poolConfig } from './config';
import { getTables } from './helpers';

export const pool = new pg.Pool(poolConfig);
export async function initDbConnection(): Promise<pg.PoolClient> {
  try {
    const client = await pool.connect();
    const tables = getTables();
    await Promise.all(tables.map(t => client.query(t)));
    return client;
  } catch (e) {
    throw e;
  }
}
