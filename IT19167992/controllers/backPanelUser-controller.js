const express = require('express');
const router = express.Router();
const backPanelUserService = require('../services/backPanelUser-service');

module.exports = () => {
    router.post('/add' , backPanelUserService.createBackPanelUser);
    router.get('/',backPanelUserService.getBackPanelUsers);
    router.put('/edit/:id', backPanelUserService.updateBackPanelUser);
    router.delete('/delete/:id', backPanelUserService.deleteBackPanelUser);
    return router;
}