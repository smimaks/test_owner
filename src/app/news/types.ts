export interface AllNewsQuery {
  limit: number;
  offset: number;
}

export interface OneNewsQuery {
  id: number;
}

export interface GetOneReturn {
  id?: number;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: Date;
  content: string | null;
}

export interface GetAllReturn extends GetOneReturn {}

export interface INewsService {
  getAll(query: AllNewsQuery): Promise<GetAllReturn[]>;

  getOne(query: OneNewsQuery): Promise<GetOneReturn>;
}
