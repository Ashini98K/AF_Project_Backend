var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var mongo = require('mongoose')
//var mongoUri = require('mongo');
var UserModel = require('./models/user-model')
var userApi = require('./api.js')
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

app.route('/create').post((req,res) => {
   
    userApi.createUser(req,res)
});


var server = app.listen(5000, function () {
    console.log('Node server is running..');
});