const express = require('express');
const path = require('path');
const favicon = require("serve-favicon");

// Create Server
const server = express();

// Using JSON middleware for body parsing
server.use(express.json());

// Serve static assets if in production
if(process.env.NODE_ENV == 'production') 
{
    server.use(express.static('encryptor/build'));
    //server.use(favicon(path.join(__dirname, 'encryptor', 'build', 'icons', 'favicon.ico')));

    server.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'encryptor', 'build', 'index.html'))
    })
}
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server listening on port ${port}`));

// Using Router middleware
const router = require('./middleware/router');
server.use('/', router);