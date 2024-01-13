export interface NewsResponse {
  status: string;
  totalResults: number;
  articles: {
    source: {
      id: string;
      name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: Date;
    content: string | null;
  }[];
}

export interface INewsAdapter {
  getNews(): Promise<NewsResponse>;
}
