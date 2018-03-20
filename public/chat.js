var socket = io.connect('http://localhost:3000');


var message = document.getElementById('message'),
	handle = document.getElementById('handle'),
	output = document.getElementById('output'),
	btn =	document.getElementById('send'),
	feedback = document.getElementById('feedback');


//Emit Event
btn.addEventListener('click', function(){
	socket.emit('chat', {
		message: message.value,
		handle : handle.value
	});

	message.value = "";
});

message.addEventListener('keypress', function(){
	socket.emit('typing', handle.value);
});



//Listen for Event
socket.on('chat', function(data){
	feedback.innerHTML = "";
	output.innerHTML += '<p><strong>' + data.handle + '</strong>: ' + data.message + '</p>';
});

socket.on('typing', function(data){
	feedback.innerHTML = '<p><em>' + data + ' is typing message....</em></p>';
})