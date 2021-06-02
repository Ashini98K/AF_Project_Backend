var express = require('express')
var router = express.Router()
const controller = require('./test')

function createUser(req, res){

    // if(req.body){
    //     console.log(req.body)
    // const user = new UserModel(req.body)
    // user.save().then((user) => {
    //     res.json(user)
    // }).catch(err => {
    //     res.status(500).send(err.message)
    // })
    // }

    console.log(req.body)

}

module.export = createUser