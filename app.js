var express = require('express');
var http = require('http');
var fs  = require('fs');
var moment = require('moment');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send('<html><head></head><body><h1>Hello Word!</h1></body></html>');
})

app.get('/person/:id', function(req, res) {
    res.send('<html><head></head><body><h1>Person: ' + 
    req.params.id + '</h1></body></html>');
})

app.get('/api', function (req, res) {
    res.json({firstname: 'John', lastname: 'Doe'});
});

app.listen(port);

console.log(moment().format("ddd, hA"));

http.createServer(function(req, res) {
    if (req.url === '/json'){
        res.writeHead(200, {'Content-Type': 'text/json'});
        var obj = {
            firstname: 'ElAmin',
            lastname: 'Douani'
        }
        res.end(JSON.stringify(obj));
    }
    if (req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
        var message = 'Hello ........';
        html = html.replace('{Message}', message);
        res.end(html); 
    }
    else {
        res.writeHead(404);
        res.end();
    }
    //fs.createReadStream(__dirname + '/index.html').pipe(res);
    
}).listen(1330, '127.0.0.1');