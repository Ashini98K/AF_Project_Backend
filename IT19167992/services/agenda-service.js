const Agenda = require('../models/agenda-model');

const createAgenda = async ( req, res) =>{
    if(req.body){
        const agenda = new Agenda(req.body);
        await agenda.save()
        .then(data => {
            res.status(200).send({ data: data});
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
    }
}

const getAgenda = async (req,res) => {
    await Agenda.find({})
    .then(data => {
        res.status(200).send({ data: data});
    })
    .catch(error => {
        res.status(500).send({ error: error.message });
    });
}

module.exports = {
    createAgenda,
    getAgenda
};