const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
    router: {
      stripTrailingSlash: true,
    },
  });

  server.route(routes);

  await server.start();
  console.log(`server berjalan pada ${server.info.uri}`);
};

init();
