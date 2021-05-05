const express = require('express');

// Create Server
const server = express();

// Using JSON middleware for body parsing
server.use(express.json());

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server listening on port ${port}`));

// Using Router middleware
const router = require('./middleware/router');
server.use('/', router);