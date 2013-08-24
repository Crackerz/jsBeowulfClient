/**
 * This file is used to load external dependencies in javascript libraries.
 * It has no dependencies itself.
 */

/**
 * This function loads all dependencies in the array urls.
 * @param urls
 * The array of strings representing urls to load
 * @param callback
 * The function to call when all external files are loaded
 */
function loadScripts(urls,callback) {	
	var called = 0
	for(var url in urls) {
		loadScript(urls[url], function(){
			console.log("incrementing called: "+called+"+1");
			called++;
			if(called == urls.length) {
				console.log(urls.length+":"+called);
			 	callback();
			}
		});
	}
}

/**
 * This function loads a single script from an external source.
 * @param url
 * A string representing a url to load
 * @param callback
 * The function to call when file is loaded
 */
function loadScript(url,callback) {
	var head = document.getElementsByTagName("head")[0];
	var script = document.createElement("script");
	script.type = "application/javascript";
	script.src = url;
	script.addEventListener("load",callback);
	head.appendChild(script);
}
