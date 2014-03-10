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

obj = null;
function socketMessage(e) {
	//e is an event
	if(obj==null) {
		log.write(e.data);
		eval(e.data);
	}else{
		obj.evaluate(e.data);
	}
}

function socketError(e) {
	log.write("Lost Connection");
}
