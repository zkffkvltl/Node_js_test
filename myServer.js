import { route } from './myRouter';

const http = require('http');
const url = require('url');


function start (port, hostname, route, handle) {
    function onRequset(req, res) {
        let sPostData='';
        let sPathname = url.parse(req.url).pathname;
        req.setEnconding('utf8');
        req.addListener('data', function(dataChunk) {
            sPostData += dataChunk;
            console.log('Chunk = '+ dataChunk);
        });
        req.addListener('end', function() {
            route(sPathname, handle, res, sPostData);
        })
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