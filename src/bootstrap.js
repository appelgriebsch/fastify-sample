// @ts-check

import fastify from "fastify";
import cors from "fastify-cors";
import websocket from "fastify-websocket";

import default_routes from "./routes.js";

const bootstrap = async () => {

  // create a new fastify instance
  const instance = fastify({
    logger: {
      level: 'info',
      timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`
    },
  });

  await instance.register(cors, {
    methods: ['GET', 'POST', 'OPTIONS']
  });

  await instance.register(websocket);
  await instance.register(default_routes);
  return instance;
};

export default bootstrap;
