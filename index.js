const myServer = require('./myServer');
let nPort = 8000;
let sHost = localhost;
const myRouter = require('./myRouter');

myServer.start(nPort, sHost, myRouter.route);