const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ResearchPaperModel = require('../models/researcher')
const WorkShopProposalModel = require('../models/work-shop-presenters')

app.use(bodyParser.json())

const viewAllResearchForReview = async (req, res) => {

    ResearchPaperModel.find().then((data) => {
        res.json(data)
    }).catch(err => {
        res.status(500).send(err.message)
    })
    
}

const viewAllWorkShopProposalForReview = async (req, res) => {

    WorkShopProposalModel.find().then((data) => {
        res.json(data)
    }).catch(err => {
        res.status(500).send(err.message)
    })
    
}

module.exports = {viewAllWorkShopProposalForReview, viewAllResearchForReview}