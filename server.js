var express = require('express');
var app = express();
var port = 3000;

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

// app.use(middleware.requireAuthentication);

app.use(middleware.logger);

// takes 2 args: 1st is the route
// 2nd is an anonymous function
// req holds all info sent from the user
// res is what you want to send as response
// app.get('/', function(req, res) {
// 	res.send('Hello Express');
// });

app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About Us');
});

// expose the public folder here to the app
app.use(express.static(__dirname + '/public'));

// listen on port 3000
app.listen(port, function() {
	console.log('Express server has started at ' + port);
});