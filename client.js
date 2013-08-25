/**
 * This file has the following direct dependencies:
 * log.js
 */
function firstRun() {
	var clienturls = ['log.js'];
	loadScripts(clienturls, function() {
		//All dependencies loaded
		log.init("output");
		socket = new WebSocket("ws://127.0.0.1:8080/socket");
		socket.onopen = function() {socketConnected();};
		socket.onmessage = function(e) {socketMessage(e);};
		socket.onerror = function(e) {socketError(e);};
	});
}

function socketConnected() {
	log.write("Connected!");
}

function socketMessage(e) {
	//e is an event
	log.write(e.data);
}

function socketError(e) {
	log.write("Lost Connection");
}
