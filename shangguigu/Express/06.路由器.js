const express = require('express')
const app = express()

const adminRoute = require('./routes/adminRoute')
const homeRoute = require('./routes/homeRoute')

app.use(adminRoute)
app.use(homeRoute)

app.all('*',(require,response)=>{
    response.send('404')
})

app.listen(80,()=>{
    console.log('服务启动成功');
})