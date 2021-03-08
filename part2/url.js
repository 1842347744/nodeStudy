var url = require('url');
var obj = url.parse('http://www.ywc.com/hihi?name=ywc&age=24', true);
var urlObj = new URL('http://www.ywc.com/hihi?name=ywc&age=24');
console.log(urlObj);
console.log(obj);
console.log(JSON.parse(JSON.stringify(obj.query)));