const queryString = require('querystring');
const myBrain = require('./myBrain');
const myData = require('./twitterDonKim');

let trainedNet = myBrain.train(myData.trainingData);

function sleep(millisec){
    let timeStart = new Date().getTime();
    while (new Date().getTime()<timeStart+millisec);
}

function start(res){
    let sBody = '<html>' + '<head>' +
        '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />' +
        '</head>' + '<body>' +
        '내용을 입력하세요.<br>' +
        '<form action="/hello" method="post">' +
        '<input type="text" name="mytwitte" /><br>' +
        '<button type="submit">입력 완료</button>' +
        '</form>' + '</body>' + '</html>';
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(sBody);
    res.end();
}

function execute(input,postData) {
    let result = myBrain.getResult(trainedNet, input);
    let myresult = queryString.parse(postData).mytwitte
    let output;
    
    if (result.trump > result.myresult || result.myresult < result.kardashian) {
        output = 'trump';
    }else if(result.trump < result.myresult || result.myresult > result.kardashian) {
        output = 'kardashian';
    }
    console.log('trump = ' + Math.round(result.trump*100) + '%, kardashian = ' + Math.round(result.kardashian*100) + '%');
    return output;
}


function hello(res,postData){
    let sBody = '<html>' + '<head>' +
        '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />' +
        '</head>' + '<body>' +
        '안녕하세요. ' +
        '(트윗: ' + queryString.parse(postData).mytwitte + ')' +
        '</body>' + '</html>';
    
        execute(queryString.parse(postData).mytwitte)
 res.writeHead(200, { 'Content-Type': 'text/html' });
 res.write(sBody);
 res.end();
}


exports.start = start;
exports.hello = hello;