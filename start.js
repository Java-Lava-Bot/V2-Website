const { createServer } = require('http');
const next = require('next');

// Basic global error logging to surface crashes that can show up as 502
process.on('uncaughtException', (err) => {
  console.error('[uncaughtException]', err);
});
process.on('unhandledRejection', (reason) => {
  console.error('[unhandledRejection]', reason);
});

const port = Number(process.env.PORT) || 8080;
const host = process.env.HOST || '0.0.0.0';
const app = next({ dev: false });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = createServer((req, res) => {
      // Minimal request logging for debugging
      if (process.env.NODE_ENV !== 'production') {
        console.log(`[req] ${req.method} ${req.url}`);
      }
      handle(req, res);
    });

    server.on('error', (err) => {
      console.error('[server:error]', err);
    });

    server.listen(port, host, () => {
      console.log(`> Ready on http://${host}:${port}`);
    });
  })
  .catch((err) => {
    console.error('[next:prepare:error]', err);
    process.exit(1);
  });