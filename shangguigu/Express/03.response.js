const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/res', (require, response) => {
    // 状态码
    // response.statusCode = 200;
    // response.status(500)
    // 状态字符串
    // response.statusMessage = 'abc'
    // response.set('name','abc')

    // response.send('哈喽 express')ƒ
    // 下载文件
    // response.download('./package.json')
    // 文件内容响应
    // response.sendFile(__dirname + '/package.json')
    // 重定向
    response.redirect('http://www.baidu.com')
})
app.get('/login', (require, response) => {
    response.sendFile(__dirname + '/login.html')
})
app.post('/login',(require,response)=>{
    console.log(require.body);
    response.send('登陆成功')
})
app.listen(80, () => {
    console.log('服务已启动 127.0.0.1');
})