const express = require('express');
const client = require('prom-client');

const app = express();
const register = new client.Registry();

client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// Example home route serving HTML for your app UI
app.get('/', (req, res) => {
  res.send('<html><body><h1>Prime Video Clone</h1></body></html>');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
