var http = require('http'); // www
var fs = require('fs');
var server = http.createServer();
server.listen(5000, function () {
    console.log('服务器启动了,可以通过http://127.0.0.1:5000来访问');
})
server.on('request', function (request, response) {
    if (request.url === '/') {
        fs.readFile('../resources/index.html', (err, data) =>{
            if (err) {
                response.setHeader('Content-Type', 'text/plain; charset=utf-8'); //设置响应头的编码格式，防止乱码
                response.end('文件读取失败');
            } else {
                response.setHeader('Content-Type', 'text/html; charset=utf-8');
                response.end(data);
            };
        })
    } else if (request.url === '/img') {
        fs.readFile('../resources/timg.jpg', (err, data) =>{
            if (err) {
                response.setHeader('Content-Type', 'text/plain; charset=utf-8');
                response.end('文件读取失败');
            } else {
                response.setHeader('Content-Type', 'image/jpeg');
                response.end(data);
            };
        })
    }
})