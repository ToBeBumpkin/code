// 1,安装express
// 2,引入express
const express = require('express')
// 3,创建应用对象
const app = express();
// 4,创建路由规则
app.get('/', (require, response) => {
    response.end('hello express')
})
app.post('/login', (require, response) => {
    console.log(require.body);
    response.end('login')
})

app.all('/admin', (require, response) => {
    response.end('all admin')
})

//404 配置
app.all('*', (require, response) => {
    response.end('<h1>404 Not Found</h1>')
})
// 5,监听端口 启动服务
app.listen(80, () => {
    console.log('服务已启动，80 端口监听中。。。');
})