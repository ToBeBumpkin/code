
//导入express模块
const express = require('express')
const bodyParser = require('body-parser')

//创建web服务器
const app = express()
const jwt = require('jsonwebtoken')//生成JWT
var { expressjwt: expressJWT } = require("express-jwt");//解析JWT

//解决接口跨域问题
const cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
//配置解析表单数据的中间件 POST请求
app.use(express.urlencoded({ extended: false }))
//定义secret密钥
const secretKey = '--234--'
//挂载路由
//HS256 使用同一个「secret_key」进行签名与验证 
//RS256 是使用 RSA 私钥进行签名，使用 RSA 公钥进行验证。
app.use(expressJWT({ secret: secretKey, algorithms: ["HS256"] }).unless({ path: [/^\/api\//] }))// /匹配的内容/ ^不在\转义/api/

app.post('/api/login', (req, res) => {
    console.log(req.body);
    //判断用户提交的登录信息是否正确
    if (req.body.username !== 'admin' || req.body.password !== '0000') {
        return res.send(
            { status: 400, msg: '登录失败' }
        )//服务器发送给客户端
    }
    //登录成功之后加密用户的信息对象——为了保证安全性 不要将密码进行加密
    //否则token泄露 你的密码也泄露了
    //用户信息对象 密钥 有效期
    const tokenStr = jwt.sign(
        { username: req.body.username, a: req.body.hello }, secretKey, { expiresIn: '60h' }//30=30ms 30h=30小时 我设置的比较长 为了防止我使用get命令太慢了
    )
    //登录成功生成jwt字符串
    res.send({
        status: 202,
        msg: '登录成功',
        token: tokenStr,//要发送给客户端的token字符串
    })//服务器发送给客户端状态

})
//有权限
app.get('/admin/getinfo', (req, res) => {
    console.log(req.auth)
    res.send({
        status: 200,
        message: '获取用户信息成功',
        data: req.auth,//要发送给客户端的用户信息
    })
})
//全局中间件
app.use(function (err, req, res, next) {
    if (err.name === "UnauthorizedError") {
        res.send({
            status: 401,
            message: '无效的Token',

        })
    }
    res.send({
        status: 500,
        message: '未知的错误',
    }
    )
});
//启动服务器、使用80端口
app.listen(8888, () => {
    console.log('http://127.0.0.1:8888  启动成功')
})