import { route } from './myRouter';

const http = require('http');
const url = require('url');

function start (port, hostname, route){
    function onRequset(req, res){
        let sPathname = url.parse(req.url).pathname;
        route(sPathname);
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('Hello, world');
        res.end();
    }
    http.createServer(onRequset).listen(port, hostname);
    console.log('Server is running at '+hostname+':'+port);
}

exports.start = start;

/*const http = require('http');

module.exports = function(port, hostname){
    function onRequset(req, res){
        ...
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('Hello, world');
        res.end();
    }
    http.createServer(onRequset).listen(port, hostname);
    console.log('Server is running at '+hostname+':'+port);
}
...
*/