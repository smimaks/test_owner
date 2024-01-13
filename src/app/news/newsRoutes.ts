import { RouteOptions, RouteShorthandMethod } from 'fastify/types/route';
import { allNewsController, oneNewsController } from './controller';

const newsRoutes: RouteOptions[] = [
  {
    method: 'GET',
    url: '/one',
    handler: oneNewsController,
    schema: {
      querystring: {
        id: { type: 'number' },
      },
      summary: 'One news',
      description: 'Get one news',
      tags: ['news'],
      // response: {
      //   200: {
      //     type: 'object',
      //     properties: {
      //       text: { type: 'string' },
      //     },
      //   },
      // },
    },
  },
  {
    method: 'GET',
    url: '/all',
    handler: allNewsController,
    schema: {
      querystring: {
        limit: { type: 'number' },
        offset: { type: 'number' },
      },
      summary: 'All news',
      description: 'Get all news',
      tags: ['news'],
      // response: {
      //   200: {
      //     type: 'object',
      //     properties: {
      //       text: { type: 'string' },
      //     },
      //   },
      // },
    },
  },
];

export default newsRoutes;
