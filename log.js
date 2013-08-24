var log = {
	init : function(div) {
		log = {
			output : document.getElementById(div),
			write : function(s) {
				this.output.insertAdjacentHTML("beforeend",this.format(s));
			},
			format : function(s) {
				return s + "<br>";
			}
		}
	}
};
