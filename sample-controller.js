const express = require('express')
const router = express.Router()
const service = require('./sample-service')

module.exports = function(){

    
    router.post('/create',service.createUser)
    

    return router

}
