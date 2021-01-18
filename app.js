var http = require('http');
var fs  = require('fs');
var moment = require('moment');

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
    
}).listen(1337, '127.0.0.1');