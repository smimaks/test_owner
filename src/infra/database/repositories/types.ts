// export interface News {
//   status: string;
//   totalResults: number;
//   articles: {
//     source: {
//       id: string;
//       name: string;
//     };
//     author: string;
//     title: string;
//     description: string;
//     url: string;
//     urlToImage: string | null;
//     publishedAt: Date;
//     content: string | null;
//   }[];
// }
export interface News {
  source: {
    id: string;
    name: string;
  };
  id?: number;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: Date;
  content: string | null;
}

export interface INewsRepository {
  addNews(news: Omit<News, 'source'>): Promise<void>;

  getAllNews(limit: number, offset: number): Promise<Omit<News, 'source'>[]>;

  getOne(id: number): Promise<Omit<News, 'source'>>;
}
