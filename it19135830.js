const express = require('express')
const router = express.Router()
const controller = require('./IT19135830/controllers/conference-controller')


module.exports = function(){

    router.post('/controller',controller())

    return router

}