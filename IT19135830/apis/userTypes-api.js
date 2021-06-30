const express = require('express');
const router = express.Router();
const userType = require('../controllers/researchers');
const presenter = require('../controllers/workshopPresenters')
const researcher =  require('../controllers/researchers');

//exporting function  api to connect to main endpoint
module.exports = function () {
    //type = user type wanted to filter out
    // router.get('/user-type/:type', userType.getUserByType);
    router.get('/presenter/:status',presenter.getPresenter);
    router.get('/researcher/:status',researcher.getReseacher);


    return router;
}