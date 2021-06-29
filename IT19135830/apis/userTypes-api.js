const express = require('express');
const router = express.Router();
const userType = require('../controllers/userTypes-controller');

module.exports = function () {
    router.get('/user-type/:type', userType.getUserByType);

    return router;
}