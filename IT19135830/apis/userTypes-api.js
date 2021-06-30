const express = require('express');
const router = express.Router();
const userType = require('../controllers/viewUser/researchers');
const presenter = require('../controllers/viewUser/workshopPresenters')
const researcher =  require('../controllers/viewUser/researchers');
const researcherStatus = require('../controllers/viewUser/getStatus')

//exporting function  api to connect to main endpoint
module.exports = function () {
    //type = user type wanted to filter out
    // router.get('/user-type/:type', userType.getUserByType);
    router.get('/presenter/:status',presenter.getPresenter);
    router.get('/researcher/:status',researcher.getReseacher);
    router.get('/presenter-status/:userId',researcherStatus.presenterStatus);


    return router;
}