const express = require('express')
const router = express.Router()
const controller = require('./test')

module.exports = function(){

    
    router.post('/create',controller.createUser)

    return router

}
