var express = require('express');
var socket  = require('socket.io');

// app setup
var app = express();
app.use(express.static('public'));

var server = app.listen(3000, function(){
	console.log('linsten port 3000');
});


//socket setup
var io = socket(server);

io.on('connection', function(socket){
	console.log("made socket connection", socket.id);

	socket.on('chat', function(data){
		io.sockets.emit('chat', data);
	});

	socket.on('typing', function(data){
		socket.broadcast.emit('typing', data);
	});

});