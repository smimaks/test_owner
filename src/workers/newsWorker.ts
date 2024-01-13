import { INewsRepository } from '../infra/database/repositories/types';
import { INewsAdapter } from '../adapters/types';
import { INewsWorker } from './types';

export class NewsWorker implements INewsWorker {
  constructor(
    private readonly newsAdapter: INewsAdapter,
    private readonly newsRepo: INewsRepository,
  ) {}

  async run(): Promise<void> {
    const news = await this.newsAdapter.getNews();
    await this.newsRepo.addNews(news.articles[Math.floor(Math.random() * 19 + 1)]);
  }
}
