function route(pathname, handle, res){
    console.log('Routing for '+pathname);
    if(typeof handle[pathname]==='function')
        return handle[pathname](res);
    else {
        res.writeHead(404, {'Content-Type':'text/html'});
    res.write('404 not found');
    res.end();
    }
}

exports.route = route;