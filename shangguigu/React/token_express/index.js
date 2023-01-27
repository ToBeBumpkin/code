const express = require('express')
const app = express()

app.get('/get/userInfo',(request,response)=>{
    response.send('/get/userInfo')
})
app.post('/login',(request,response)=>{
    response.send('/login')
})

app.listen(80,()=>{
    console.log('服务已启动');
})