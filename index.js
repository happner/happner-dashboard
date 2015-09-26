module.exports = function () {
  return new Dashboard();
};

function Dashboard() {
	var _this = this;

	_this.initialize = function($happn, callback){
		var terminal, url, address = $happn.info.datalayer.address;
		url = "http://"+address.address+":"+address.port+"/happner-dashboard";

		$happn.log.info(url);

		if (terminal = $happn.exchange.terminal) {
			terminal.register('dashboard', {
				description: '(osx) Open browser to the dashboard.',
				run: function(args, callback) {
					require('child_process').exec('open ' + url, function(e) {
						callback(e);
					});
				}
			});
		}

		callback(null);
	}

};