const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongo = require('mongoose')
//var mongoUri = require('mongo');
const UserModel = require('./models/user-model')
const userApi = require('./sample-controller.js')
const agendaApi = require('./IT19167992/controllers/agenda-controller')
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())


mongo.connect('mongodb+srv://root:root@cluster0.pikdq.mongodb.net/icafDB?retryWrites=true&w=majority', {useNewUrlParser:true})



mongo.connection.once('open', function (){
    console.log('Mongo db connected')
})

app.route('/').get((req,res) => {
    res.send('SLIIT AF FINAL API');
});

//change only here
app.use('/create-user',userApi());
app.use('/agenda',agendaApi());

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});