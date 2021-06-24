const express = require('express')
const router = express.Router()
const service = require('../services/conference-service')


module.exports = function(){

    router.post('/add-details',service.createConference)

    return router

}