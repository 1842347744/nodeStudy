// 1.使用require方法加载fs核心模块
// 2.读取文件
// 第一个参数是读取的文件的路径
// 第二个参数是一个回调函数（有两个参数：data;error）
    // 成功：data 返回请求成功的数据； error 为null
    // 成功：data 为undefined； error 为错误对象。
var fs = require('fs');
fs.readFile('你好x.txt',function(error, data) {
    // 文件中存储的是二级制数据 0  1 
    // 但是在这返回的转成了16进制，不管是二进制还是十六进制我们都得将其转化，可以用tostring方法。
    if (error) {
        console.log(error);
    } else {
        console.log('文件读取成功');
        console.log(data.toString());
    }
})