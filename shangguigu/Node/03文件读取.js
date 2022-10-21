const fs = require('fs')

fs.readFile('./js写入.txt',(err,res)=>{
    if(err) throw err;
    console.log(res.toString());
})

let res = fs.readFileSync('./js写入.txt')
console.log(res.toString());