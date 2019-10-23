const express = require('express')
const router = express.Router()

router.get('/', function(require, response){
    response.status(200).send({
        title: 'Primeiro Projeto Prático',
        version: '0.0.1'
    })
})

module.exports = router