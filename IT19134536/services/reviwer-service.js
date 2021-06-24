const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongo = require('mongoose')
const ConferenceModel = require('../models/conference')

app.use(bodyParser.json())

const viewAllResearchForReview = async (req, res) => {

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

const viewAllWorkShopProposalForReview = async (req, res) => {

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

module.exports = {createConference,viewAllWorkShopProposalForReview}