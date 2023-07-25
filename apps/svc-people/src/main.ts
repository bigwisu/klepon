/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api/people', (req, res) => {
  res.send({ message: 'Welcome to svc-people!' });
});

app.get('/api/people/list', (req, res) => {
  res.send({ message: 'list of people!' });
});

const port = process.env.PORT || 3334;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
server.on('error', console.error);
