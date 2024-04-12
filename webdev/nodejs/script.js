var http = require('http');
http.createServer(function(req, res) {
    res.write("Hello world! Welcome to node js")
    res.end()
}).listen(8080);