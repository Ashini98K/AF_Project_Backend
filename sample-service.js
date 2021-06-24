const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongo = require('mongoose')
//var mongoUri = require('mongo');
const UserModel = require('./models/user-model')

app.use(bodyParser.json())

const createUser = async (req, res) => {

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

module.exports = {createUser}



