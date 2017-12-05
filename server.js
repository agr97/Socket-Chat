const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

var reactFrontend = require("./src/index");

const app = express();
app.use(reactFrontend);

io.on('connection', function(socket){
  console.log('a user connected');
});

server.listen(3001, () => console.log(`Listening on port 3001`));
