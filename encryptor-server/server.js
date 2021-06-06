const express = require('express');
const path = require('path');

// Create Server
const server = express();

// Using JSON middleware for body parsing
server.use(express.json());

// Serve static assets if in production
if(process.env.NODE_ENV == 'production') {
    // Set static folder
    server.use(express.static('encryptor/build'));
    server.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'encryptor', 'build', 'index.html'))
    })
}
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server listening on port ${port}`));

// Using Router middleware
const router = require('./middleware/router');
server.use('/', router);