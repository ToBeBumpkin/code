const http = require('http')
const url = require('url')

const serve = http.createServer(function (request, response) {
    response.setHeader('Content-type', 'text/html;charset=utf-8')
    // console.log(request);
    // console.log(request.method);
    // console.log(request.url);
    // console.log(request.httpVersion);
    let res = url.parse(request.url, true)
    let pathname = res.pathname
    let method = request.method.toUpperCase()

    if (pathname === '/login' && method === 'GET') {
        response.end('login登陆页面')
    } else if (pathname === '/register' && method === 'GET') {
        response.end('register注册页面')
    } else {
        response.end('http 服务器')
    }
})
serve.listen(8000, () => {
    console.log('服务已启动，端口号8000');
})