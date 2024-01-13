import { NewsAdapter } from './adapters/news.adapter';
import envs from './config/envs';
import { NewsRepository } from './infra/database/repositories/news.repository';
import { pool } from './infra/database/dbConnection';
import { NewsWorker } from './workers/newsWorker';
import { NewsService } from './app/news/newsService';

const newsAdapter = new NewsAdapter(envs.NEWS_API_KEY);
const newsRepo = new NewsRepository(pool);
export const newsWorker = new NewsWorker(newsAdapter, newsRepo);
export const newsService = new NewsService(newsRepo);
