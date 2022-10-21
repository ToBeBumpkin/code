const express = require('express')

const app = express()

app.use((request,response,next)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    next()
})

app.get('/server',(request,response)=>{
    response.send('server get')
})

app.post('/server',(request,response)=>{
    response.send('server post')
})

app.listen(80,()=>{
    console.log('服务已启动');
})