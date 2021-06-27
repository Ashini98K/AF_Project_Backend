const express= require('express')
const router = express.Router();
const login = require('../controllers/login-controller')

module.exports = function (){
    router.post('/login', login.login)

    return router;
}