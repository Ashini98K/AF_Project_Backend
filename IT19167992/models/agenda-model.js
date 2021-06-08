const mongoose = require('mongoose');

const AgendaModel = new mongoose.Schema({
    event : { type: String, required : true, trim : true },
    date : { type: String, required : true, trim : true},
    time : { type : String, required : true, trim : true},
    venue : { type : String, required : true, trim : true}
});

const Agenda = mongoose.model('agendas',AgendaModel);
module.exports = Agenda;