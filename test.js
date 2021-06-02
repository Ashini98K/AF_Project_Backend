var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var mongo = require('mongoose')
//var mongoUri = require('mongo');
var UserModel = require('./models/user-model')

app.use(bodyParser.json())

async function  createUser (req, res){
    if(req.body){
        console.log(req.body)
    const user = new UserModel(req.body)
    user.save().then((user) => {
        res.json(user)
    }).catch(err => {
        res.status(500).send(err.message)
    })
    }
}

module.exports = createUser

