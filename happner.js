module.exports = {
	"id":"happner-dashboard",
	"autoload":{
		"component":{
			startMethod:"initialize",
			schema:{
		      "exclusive":false
		    },
		    web:{
		      routes:{
		        "static":"app"
		      }
		    }
		}
	}
}