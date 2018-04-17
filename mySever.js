const http = require('http');
let nPort = 8000;
let sHost = localhost;

function start(){
    function onRequset(req, res){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('Hello, world');
        res.end();
    }
    http.createServer(onRequset).listen(nPort, sHost);
    console.log('Server is running at '+sHost+':'+nPort);
}
exports.start = start;