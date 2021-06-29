const express = require('express')
const router = express.Router()
const service = require('../services/reviwer-service')



module.exports = function(){

    router.get('/view-posts-for-review',service.viewAllResearchForReview)

    router.get('/view-workshop-for-review', service.viewAllWorkShopProposalForReview)

    return router

}