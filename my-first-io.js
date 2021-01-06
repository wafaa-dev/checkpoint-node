var fs = require('fs');
var Line = fs.readFileSync(process.argv[2]).toString().split("\n").length;
console.log(Line-1);