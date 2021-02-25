// @ts-check

import bootstrap from "./bootstrap.js";

bootstrap()
  .then((app) => {

    app.listen(8080, "localhost", (err, address) => {

      if (err) {
        app.log.error(`Starting webserver at localhost:8080 failed with ${err}`);
        process.exit(1);
      }

      app.log.info(`webserver is listening on ${address}`);

      process.on('SIGINT', () => app.close());
      process.on('SIGTERM', () => app.close());
    });
  })
  .catch((err) => {
    console.log(`Starting up the webserver failed with ${err}`);
    process.exit(-1);
  });
