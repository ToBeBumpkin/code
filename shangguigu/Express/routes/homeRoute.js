const { response } = require('express')
const express = require('express')
const router = express.Router()

router.get('/home',(require,response)=>{
    response.send('home')
})

module.exports = router