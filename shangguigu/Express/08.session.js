const express = require('express')
const session = require('express-session')
const app = express()

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
}))


app.get('/set-session',(request,response)=>{
    request.session.name = '小明'
    request.session.email = '971708992@qq.com'
    response.send('set-session')
})
app.get('/get-session',(request,response)=>{
    console.log(request.session.name);
    console.log(request.session.email);
    response.send('get-session')
})
app.get('/clear-session',(request,response)=>{
    request.session.destroy(function(){
        response.send('session 删除成功')
    })
})

app.listen(80, () => {
    console.log('服务已启动');
})