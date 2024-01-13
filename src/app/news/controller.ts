import { FastifyReply, FastifyRequest } from 'fastify';
import { newsService } from '../../di';
import { allNewsQuery, oneNewsQuery } from './schemas/schemas';

export async function allNewsController(request: FastifyRequest, reply: FastifyReply) {
  const queryParams = allNewsQuery.parse(request.query);
  const allNews = await newsService.getAll(queryParams);
  reply.type('application/json');
  reply.send({
    data: allNews,
    count: allNews.length,
  });
}

export async function oneNewsController(request: FastifyRequest, reply: FastifyReply) {
  const queryParams = oneNewsQuery.parse(request.query);
  const news = await newsService.getOne(queryParams);
  reply.type('application/json');
  reply.send(news);
}
