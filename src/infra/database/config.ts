import { Pool, PoolConfig } from 'pg';
import envs from '../../config/envs';

export const poolConfig: PoolConfig = {
  host: envs.DB_HOST,
  port: +envs.DB_PORT,
  user: envs.DB_USER,
  password: envs.DB_PASSWORD,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
};
