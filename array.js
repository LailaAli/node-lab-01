var http = require("http");
var taskList = require('./taskList');
console.log(taskList[1]);
console.log(taskList.length);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

http.createServer(function (request, response) {
    var i = getRandomInt(0, taskList.length);
    response.writeHead(200, { "Content-type": "text/plain" });
    response.write(taskList[i]);
    console.log(taskList[i]);
    response.end();
}).listen(8888);
