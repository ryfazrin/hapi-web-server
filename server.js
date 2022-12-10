const Hapi = require('@hapi/hapi');
const rountes = require('./routes');
 
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  server.route(rountes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();