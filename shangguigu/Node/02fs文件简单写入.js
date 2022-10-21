const fs = require('fs')

// 异步写入
fs.writeFile('./js写入.txt', '西游四人组', { flag: 'a' }, err => {
    if (err) {
        console.log('写入失败');
    } else {
        console.log('写入成功');
    }
})
// 同步写入
let res = fs.writeFileSync('./js写入.txt','aaa')
console.log(res);


// 第二种写入方式
const ws = fs.createWriteStream('./流写入.css')
ws.write('*{margin:0;padding:0;}')

ws.close()

// 1 可执行
// 2 可读
// 3 可写

// 777 文件的最高权限

// a append 追加
// w write 写入
// r read 读取