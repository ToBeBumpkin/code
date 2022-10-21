const qs = require('querystring')

require('http').createServer((request, response) => {
    let body = '';
    request.on('data', chunk => {
        body += chunk;
    })
    request.on('end', () => {
        console.log(body);
        const data = JSON.parse(body)
        // console.log(data);
        console.log(data.username);
        response.end(body)
    })
}).listen('8080', () => {
    console.log(`服务器已启动，请访问 localhost:8080 127.0.0.1:8080`);
})