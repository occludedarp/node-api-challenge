const actionRouter = require('./actionRouter.js');
const projectRouter = require('./projectRouter.js');
const express = require('express');
const server = express();

server.use(express.json());

// server.use('/api/actions', actionRouter);
// server.use('/api/projects', projectRouter);

server.get('/', (req, res) => {
  res.send(`
  <h2> By giving up attachment, the yogis undertake work merely through the body, mind, intellect for the purification of themselves.</h2>
  `)
})

module.exports = server;