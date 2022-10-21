const express = require('express')
const url = require('url')
const monment = require('moment')
const fs = require('fs')

function getClientIP(req) {
    return req.headers['x-forwarded-for'] ||    //判断是否反向代理
        req.connection.remoteAddress || //判断connection的远程
        req.socket.remoteAddress || //判断后端的socket 的IP
        req.connection.socket.remoteAddress;
}

const app = express()

let outputTime = function (request, response, next) {
    // console.log(Date.now());
    console.log(url.parse(request.url, true).pathname);
    next()
}
let requestRecord = function (request, response, next) {
    let ip = getClientIP(request)
    let time = monment().format('YYYY-MM-DD HH:mm:ss a')
    let path = decodeURI(request.url)
    let str = `[${time}] ${ip} ${path} \r\n`
    fs.writeFileSync('./access.log', str, { flag: 'a' })
    next()
}

// 路由中间件
let checkVip = function (request, response,next) {
    if (request.query.vip === '1') {
        // 满足条件
        next()
    } else {
        response.send('没有权限')
    }
}

//全局中间件
app.use(outputTime)
app.use(requestRecord)


app.get('/one', (require, response) => {
    response.send('one')
})
app.get('/two', checkVip, (require, response) => {
    response.send('two')
})
app.get('/three', checkVip, (require, response) => {
    response.send('three')
})

app.listen(80, () => {
    console.log('服务器已启动 127.0.0.1');
})