const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())

app.get('/set-cookie',(require,response)=>{
    response.cookie('myName','小明')
    response.send('set-cookie')
})
app.get('/get-cookie',(require,response)=>{
    console.log(require.cookies);
    response.send('get-cookie')
})
app.get('/clear-cookie',(require,response)=>{
    response.clearCookie('myName')
    response.send('clear-cookie')
})
app.listen(80,()=>{
    console.log('服务已启动');
})