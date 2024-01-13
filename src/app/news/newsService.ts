import { NewsRepository } from '../../infra/database/repositories/news.repository';
import { AllNewsQuery, GetAllReturn, GetOneReturn, INewsService, OneNewsQuery } from './types';
import * as console from 'console';

export class NewsService implements INewsService {
  constructor(private readonly newsRepo: NewsRepository) {}

  async getAll(query: AllNewsQuery): Promise<GetAllReturn[]> {
    const { limit, offset } = query;
    return this.newsRepo.getAllNews(limit, offset);
  }

  async getOne(query: OneNewsQuery): Promise<GetOneReturn> {
    console.log('!<===========delimiter=============>!');
    console.log(query.id);
    return this.newsRepo.getOne(query.id);
  }
}
