const express = require('express')
const bodyParser = require('body-parser')


const app = express()

const jwt = require('jsonwebtoken')
const { expressjwt: expressJWT } = require('express-jwt')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const secretKey = "chengxiaofei"

app.use(expressJWT({
    credentialsRequired: true,//关键
    secret: secretKey, algorithms: ['HS256'] //加密密钥，可换
}).unless({
    path: [/^\/api\//]//添加不需要token验证的路由 
}));

app.post('/api/login', (req, res) => {
    const userInfo = req.body

    const token = jwt.sign({ username: userInfo.username }, secretKey, { expiresIn: '30s' })
    res.send({
        state: 200,
        token: token
    })
})
app.get('/user/home', (req, res) => {

    res.send("home")
})

//在所有路由后面定义错误中间件
//使用全局错误处理中间件 捕获解析 JWT 失败后产生的错误
app.use((err, req, res, next) => {
    //判断是否由 Token 解析失败导致的
    if (err.name == 'UnauthorizedError') {
        return res.send({
            status: 401,
            message: '无效的Token'
        })
    }
    res.send({
        status: 500,
        message: '未知的错误'
    })
})

app.listen(80, () => {
    console.log('服务已启动80端口');
})