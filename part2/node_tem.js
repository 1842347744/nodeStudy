// 模板引擎最早就是诞生于服务器领域，后来发展到前端

var template = require('./node_modules/art-template/lib/template-web');
var http = require('http');
var fs = require('fs');
var server = http.createServer();

var  thehtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2> 我叫 {{ name }} </h2>
    <p> 练习时长 {{ age }} 年</p>, 
    爱好 {{ each hobbies }} {{ $value }} {{/each}}
</body>
</html>`
var str = template.render(thehtml, {
    name: '蔡徐坤',
    age: 2.5,
    hobbies: [
        '唱',
        '跳',
        'rap'
    ]
})

server.listen(5000, () => {
    console.log('服务器启动了,可以通过http://127.0.0.1:5000来访问');
})
server.on('request', (req, res) => {
    if (req.url === '/') {
        // res.setHeader('Content-type', 'text/html; charset=utf-8');
        // res.end(str);
        fs.readFile('index.html', (err, data) => {
            if (err) {
                console.log('写文件失败');
            } else {
                var htmldata = template.render(data.toString(), {
                    title: '主页',
                    name: 'yyyy',
                    age: '24'
                }, function (success, error) {
                    if (success) {
                        console.log('渲染成功');
                    } else {
                        console.log('渲染失败');
                    }
                })
                res.setHeader('Content-type', 'text/html; charset=utf-8');
                res.end(htmldata);
            }
        })
    }
})
