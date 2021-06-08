const express = require('express')
const router = express.Router()
const controller = require('./sample-service')

module.exports = function(){

    
    router.post('/create',controller.createUser)

    return router

}
