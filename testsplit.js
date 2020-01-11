var http = require('http');
var date = require('./date');
var url = require('url');
http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  res.write("The date and time are currently: " + date.myDateTime() + "\n");
	  res.write("Hello World!");
	  var qry = url.parse(req.url, true).query;
	  var text = qry.year + " " + qry.month;
	  res.write(text);
	  res.end();
}).listen(8080);
