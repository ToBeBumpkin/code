require('http').createServer((request, response) => {
    response.statusCode = 201
    response.statusMessage = 'cxf'
    response.setHeader('Content-type', 'text/html;charset=utf-8')
    response.write('我是write')
    response.end('成功')
}).listen(8080, () => {
    console.log(`服务器已启动，请访问 localhost:8080 127.0.0.1:8080`);
})