const express = require('express');
const router = express.Router();
const agendaService = require('../services/agenda-service');

module.exports = () => {
    router.post('/add' , agendaService.createAgenda);
    router.get('/',agendaService.getAgenda);
    return router;
}