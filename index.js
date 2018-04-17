let nPort = 8000;
let sHost = 'localhost';
const myServer = require('./myServer');
const myRouter = require('./myRouter');
const myHandler = require('./myHandler');

let handle = {};
handle['/']=myHandler.start;
handle['/start']=myHandler.start;
handle['/hello']=myHandler.hello;
myServer.start(nPort, sHost, myRouter.route, handle);