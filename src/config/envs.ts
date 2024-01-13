import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

interface IEnv {
  HOST: string;
  PORT: string;

  DB_HOST: string;
  DB_PASSWORD: string;
  DB_USER: string;
  DB_NAME: string;
  DB_PORT: string;

  NEWS_API_KEY: string;
  BASE_API_URL: string;
}

dotenv.config();

function initEnvs(): IEnv {
  const filepath = path.resolve(`.env`);

  const envs: Record<keyof IEnv, string> = {} as IEnv;
  if (fs.existsSync(filepath)) {
    const data = fs.readFileSync(filepath, 'utf8');
    const variables = dotenv.parse(data);
    const unsetEnvs = [];

    for (const [key, val] of Object.entries(variables)) {
      if (!val) {
        unsetEnvs.push(key);
      }
      envs[key as keyof IEnv] = val;
    }

    if (unsetEnvs.length) throw new Error(`Unset ENV: ${unsetEnvs.map(el => el)}`);
  }
  return envs;
}

export default initEnvs();
