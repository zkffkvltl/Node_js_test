const queryString = require('querystring');

function sleep(millisec){
    let timeStart = new Date().getTime();
    while (new Date().getTime()<timeStart+millisec);
}

function start(res){
    console.log('Request handler \'start\'');
    let sBody = '<html>' + '<head>' +
        '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />' +
        '</head>' + '<body>' +
        '이름과 별명을 입력하세요.<br>' +
        '<form action="/hello" method="post">' +
        '<input type="text" name="myName" /><br>' +
        '<input type="text" name="myNick" /><br>' +
        '<button type="submit">입력 완료</button>' +
        '</form>' + '</body>' + '</html>';
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(sBody);
    res.end();
}

function hello(res,postData){
    console.log('Request handler \'hello\'');
    let sBody = '<html>' + '<head>' +
        '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />' +
        '</head>' + '<body>' +
        '안녕하세요, ' + queryString.parse(postData).myName +
        '(별명: ' + queryString.parse(postData).myNick + ')님!' +
        '</body>' + '</html>';
 res.writeHead(200, { 'Content-Type': 'text/html' });
 res.write(sBody);
 res.end();
}
exports.start = start;
exports.hello = hello;