import pg from 'pg';
import { INewsRepository, News } from './types';
import * as console from 'console';

export class NewsRepository implements INewsRepository {
  constructor(private readonly pool: pg.Pool) {
    this.ping();
  }
  private async ping() {
    try {
      const result = await this.pool.query('select now()');
    } catch (e) {
      console.log('postgres ping error', e);
      throw e;
    }
  }
  async addNews(news: Omit<News, 'source'>): Promise<void> {
    const values = [
      news.author,
      news.title,
      news.description,
      news.url,
      news.urlToImage,
      news.publishedAt,
      news.content,
    ];
    const text =
      'insert into news(author, title, description, url, urlToImage, publishedAt, content) values ($1, $2, $3, $4, $5, $6, $7) returning *';

    const res = await this.pool.query(text, values);
  }
  async getAllNews(limit: number, offset: number): Promise<Omit<News, 'source'>[]> {
    const result = await this.pool.query('select * from news limit $1 offset $2;', [limit, offset]);
    return result.rows;
  }
  async getOne(id: number): Promise<Omit<News, 'source'>> {
    const result = await this.pool.query('select * from news where id = $1 limit 1', [id]);
    return result.rows[0];
  }
}
