const express = require('express')
const router = express.Router()
const service = require('../services/conference-service')


module.exports = function () {

    router.get('/get-conference-details', service.getConferenceDetails)

    router.put('/approve-conference', service.acceptConference)

    router.put('/reject-conference', service.rejectConference)

    router.put('/update-conference-details', service.updateConferenceDetails)

    router.post('/add-details', service.createConference)

    router.post('/add-key-speakers', service.createKeySpeaker)

    return router

}
