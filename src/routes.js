// @ts-check
import * as fastify from "fastify";

/**
 *
 *
 * @export
 * @param {fastify.FastifyInstance} fastify
 * @param {fastify.RouteOptions} options
 * @param {Function} done
 */
export default function(fastify, options, done) {

  fastify.get("/", async (request, reply) => {
    return "OK";
  });

  fastify.get('/ws', { websocket: true }, (connection, request) => {
    const app = this;
    app.log.info(`Opening websocket connection. No. of clients connected: ${app.websocketServer.clients.size}`);

    connection.on('close', () => {
      app.log.info(`Closing websocket connection. No. of clients connected: ${app.websocketServer.clients.size}`);
    });
  });

  done();
}

