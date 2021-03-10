// 0. 安装 npm i -S express / npm install express --save
// 1.引包
const express = require('express');
// 2.创建服务
const app = express();
const port = 3000;

// 公开指定目录
app.use('/public/', express.static('./public/'));

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
