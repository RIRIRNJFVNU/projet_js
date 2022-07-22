const express = require('express');
const Server = require('http').Server;
require('dotenv').config();

const app = express();

const server = Server(app);

const PORT = process.env.PORT || 3000;

app.use(express.static('assets'));


/*
 * Server
 */
server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});