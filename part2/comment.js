var http = require('http');
var fs = require('fs');
var template = require('./node_modules/art-template/lib/template-web');

let comments = [
    {
        name: 'ywc',
        comment: 'sdsd'
    },
    {
        name: 'ywc',
        comment: 'sdsd'
    },
    {
        name: 'ywc',
        comment: 'sdsd'
    },
    {
        name: 'ywc',
        comment: 'sdsd'
    }
]

http.createServer((req, res) => {
    if (req.url  === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                console.log('读取文件失败');
            } else {
                console.log('读取文件成功');
                var htmldata = template.render(data.toString(), {
                    comments: comments
                })
                res.setHeader('Content-type', 'text/html; charset=utf-8');
                res.end(htmldata);
            }
        })
    } else if (req.url.indexOf('/public') === 0) {
        fs.readFile('.' + req.url, (err, data) =>{
            if (err) {
                res.end('404');
                return;
            }
            res.end(data);
        })
    } else if (req.url === '/form') {
        fs.readFile('form.html', (err, data) => {
            if (err) {
                console.log('读取文件失败');
            } else {
                var htmldata = template.render(data.toString(), {
                    title: '主页',
                    name: 'yyyy',
                    age: '24'
                })
                res.setHeader('Content-type', 'text/html; charset=utf-8');
                res.end(htmldata);
            }
        })
    }
}). listen(5000, () => {
    console.log('服务器启动了,可以通过http://127.0.0.1:5000来访问');
})