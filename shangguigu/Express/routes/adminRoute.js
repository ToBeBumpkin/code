const express = require('express')
const router = express.Router()

router.all('/admin',(require,response)=>{
    response.send('admin')
})

router.get('/logout',(require,response)=>{
    response.send('ιεΊζε')
})

module.exports = router