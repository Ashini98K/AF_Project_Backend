const express = require('express')
const router = express.Router()
const service = require('../services/reviwer-service')


module.exports = function(){

    router.post('/view-posts-for-review',service.createConference)

    return router

}