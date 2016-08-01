// middleware that runs for every route hit
// can be called for a specific route or at an application level
// takes 3 arguments
var middleware = {
	requireAuthentication: function(req, res, next) {
		console.log('private route hit');
		next();
	},
	logger: function (req, res, next) {
		console.log("Request: " + new Date().toString() + ' ' + req.method + " " + req.url);
		next();
	}
}

module.exports = middleware;