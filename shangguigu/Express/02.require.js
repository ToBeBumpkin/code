const express = require('express')
const url = require('url')
const app = express()
app.get('/req', (require, response) => {
    console.log(require.method);
    console.log(require.url);
    console.log(url.parse(require.url, true).pathname);
    console.log(require.query);
    console.log(require.headers);
    console.log(require.get('host'));
    response.end('req')
})
app.get('/product/:id',(require,response)=>{
    let id = require.params.id
    response.send(`id 为 ${id}`)
})
app.listen(80, () => {
    console.log('服务已启动');
})