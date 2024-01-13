import { INewsAdapter, NewsResponse } from './types';

export class NewsAdapter implements INewsAdapter {
  private readonly baseUrl = 'https://newsapi.org/v2/top-headlines';
  constructor(private readonly apiKey: string) {}
  async getNews(): Promise<NewsResponse> {
    const url = `${this.baseUrl}?category=technology&apiKey=${this.apiKey}`;
    const res = await fetch(url);
    if (res.ok) {
      return res.json();
    } else throw new Error('integration error');
  }
}
