const connect = require('connect');
const serveStatic = require('serve-static');

connect()
  .use(serveStatic(`${__dirname}/output/coverage/jest/`))
  .listen(8500, () => {
    console.log('Coverage server running on 8500...');
  });
