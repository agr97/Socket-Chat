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

var serverMessages = [1,2,3];

io.on('connection', function(socket){
  console.log('a user connected');
  socket.emit('receiveServerMessages', serverMessages);
});

io.on('receiveClientMessage', (message) => {
    serverMessages.push(message);
    console.log('message recieved: ' + message);
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'));
  });

server.listen(3000, function(){
  console.log('listening on *:3000');
});