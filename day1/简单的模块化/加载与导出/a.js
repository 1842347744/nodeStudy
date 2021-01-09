// require  方法有两个作用
//  1.加载模块文件并执行里面的代码
//  2.拿到被加载文件木块导出的接口对象

//  每个模块文件中都提供了一个对象, exports
// exports 默认是空对象, 用于模块之间的通信
let bExports = require('./b');
console.log(bExports.name);
bExports.add(10, 20);