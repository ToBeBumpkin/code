const http = require('http')
const url = require('url')

const serve = http.createServer((request, response) => {
    let query = url.parse(request.url, true).query
    let bg = query.bg ? query.bg : 'red'
    response.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            .bg{
                background-color: ${bg};
            }
        </style>
    </head>
    <body class="bg">
        ${bg}
    </body>
    </html>
    `)
})

serve.listen('8080', () => {
    console.log('服务器已启动');
})