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
		socket.onopen = function() {
			log.write("Connected!");
		};
		socket.onmessage = function(e) {
			log.write("Received: "+e.data);
		};
		socket.onerror = function(e) {
			console.log(e);
		};
	});
}
