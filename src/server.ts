import Fastify from 'fastify';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import envs from './config/envs';
import newsRoutes from './app/news/newsRoutes';
import { metricRoutes } from './app/metrics/metricRoutes';

export async function serverInit() {
  const server = Fastify({
    logger: true,
  });

  await server.register(fastifySwagger, {
    swagger: {
      info: {
        title: 'Test Task',
        version: '0.1',
      },
      schemes: ['http', 'https'],
      consumes: ['application/json'],
      produces: ['application/json'],
      // tags: [{ name: 'news', description: 'test route' }],
      definitions: {},
    },
  });
  await server.register(fastifySwaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
    },
    uiHooks: {
      onRequest: function (request, reply, next) {
        next();
      },
      preHandler: function (request, reply, next) {
        next();
      },
    },
    staticCSP: true,
    transformStaticCSP: header => header,
    transformSpecification: (swaggerObject, request, reply) => {
      return swaggerObject;
    },
    transformSpecificationClone: true,
  });

  [...newsRoutes, ...metricRoutes].forEach(r => server.route(r));

  await server.ready();
  server.swagger();

  server.listen(
    {
      port: +envs.PORT,
      host: '0.0.0.0',
    },
    (err, address) => {
      if (err) throw err;
    },
  );
}
