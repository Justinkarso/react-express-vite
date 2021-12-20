import app from './server/app'

const expressServerPlugin = (path, expressApp) => ({
  name: 'configure-server',
  configureServer(server) {
    server.middlewares.use(path, expressApp);
  }
});

export default {
  plugins: [
    expressServerPlugin('/', app),
  ]
}
