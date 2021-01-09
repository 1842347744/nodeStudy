// 使用node可以非常轻松的创建web服务器
// 在node中专门提供了一个核心模块：http （创建服务器）

// 1.加载http核心模块
var http = require('http');

// 2.使用http.createServer()方法创建一个web服务器
var server = http.createServer();

// 3.服务器工作：
// 3.1绑定端口号，启动服务器
server.listen(3000, function () {
    console.log('服务器启动了,可以通过httpL://127.0.0.1:3000来访问');
})
// 3.2接收请求
// request请求事件处理函数，需要接收两个参数：
//      Request 请求对象
//          请求对象可以用来获取客户端的一些请求信息，例如请求路径
//      Reponse 响应对象
//          响应对象可以用来给客户端发送响应消息
server.on('request', function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});//设置响应头的编码格式，防止乱码
    // response 对象通过write方法给客户端返回响应数据；
    // write可以使用多次，但最后一定要使用end来结束响应，否则客户端会一直等待
    // response.write('hhhh');
    // 可以通过请求的访问路径做出不同的响应
    // 响应内容只是能是二级制数据或者字符串
    let things = [
        {
            name: '苹果',
            num: 12
        },
        {
            name: '香蕉',
            num: 13
        }
    ]
    if (request.url === '/') {
        // response.end 告诉客户端，服务端响应完毕
        response.end('首页');
    } else if (request.url === '/login') {
        response.end('去登陆');
    } else if (request.url === '/products') {
        response.end(JSON.stringify(things));
    }
})