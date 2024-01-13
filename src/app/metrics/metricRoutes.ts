import { RouteOptions } from 'fastify/types/route';
import { getMetrics } from './prometheus';

export const metricRoutes: RouteOptions[] = [
  {
    method: 'GET',
    url: '/metrics',
    handler: async (request, reply) => {
      const { contentType, metrics } = await getMetrics();
      reply.type(contentType);
      reply.send(metrics);
    },
  },
];
