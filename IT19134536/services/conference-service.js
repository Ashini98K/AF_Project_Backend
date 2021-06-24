const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongo = require('mongoose')
const ConferenceModel = require('../models/conference')

app.use(bodyParser.json())

const createConference = async (req, res) => {

    console.log('its working')

    if(req.body){
        console.log(req.body)
    const conference = new ConferenceModel(req.body)
    conference.save().then((conference) => {
        res.json(conference)
    }).catch(err => {
        res.status(500).send(err.message)
    })
    }
}

module.exports = {createConference}