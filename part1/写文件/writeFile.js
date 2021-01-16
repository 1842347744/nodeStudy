var fs = require('fs');
// 文件写入的回调函数只有一个error参数，写入错误error有值，反之error为null
fs.writeFile('写入文件.txt', '写一个写入文件',function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log('写文件成功');
    }
})