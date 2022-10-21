const http = require('http')
const url = require('url')
const fs = require('fs')

const serve = http.createServer((require, response) => {
    const pathname = url.parse(require.url, true).pathname

    // if (pathname === '/index.html') {
    //     const html = fs.readFileSync(__dirname + '/public/index.html')
    //     response.end(html)
    // } else if (pathname === '/css/style.css') {
    //     const css = fs.readFileSync(__dirname + '/public/css/style.css')
    //     response.end(css)
    // } else if (pathname === '/img/animal0.webp') {
    //     const img = fs.readFileSync(__dirname + '/public/img/animal0.webp')
    //     response.end(img)
    // } else {
    //     response.end('<h1>404</h1>')
    // }

    let filepath = __dirname + '/public' + pathname

    try {
        response.end(fs.readFileSync(filepath))
    } catch (error) {
        response.end('<h1>500</h1>')
    }
})

serve.listen('8080', () => {
    console.log('服务器已启动,端口号8080');
})