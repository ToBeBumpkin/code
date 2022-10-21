const express = require('express')
const url = require('url')

const app = express()

// app.get('/serve',(request,response)=>{
//     response.setHeader('Access-Control-Allow-Origin','*')
//     console.log(request.query.keyword);
//     response.send('ajax get 请求成功')
// })
app.all('/serve',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.send('ajax post 请求成功')
})

app.all('*',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.send('404')
})

app.listen(80,()=>{
    console.log('服务已启动。。。');
})