const express= require('express')
const router = express.Router();
const clientlogin = require('../controllers/login/client-login-controller');
const adminLogin = require('../controllers/login/admin-login-controller');


module.exports = function (){
    router.post('/client-login', clientlogin.login);
    router.post('/admin-login', adminLogin.adminLogin);

    return router;
}