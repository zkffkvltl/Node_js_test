function start(res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('hello, start');
    res.end();
}

function hello(res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('Hello');
    res.end();
}
exports.start = start;
exports.hello = hello;