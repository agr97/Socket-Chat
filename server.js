var express = require('express');
var http = require('http');
var socketIo = require('socket.io');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, 'build')))

var server = http.createServer(app);
var io = socketIo(server);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/build/index.html');
  });
  
io.on('connection', function(socket){
  console.log('a user connected');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'));
  });

server.listen(3000, function(){
  console.log('listening on *:3000');
});