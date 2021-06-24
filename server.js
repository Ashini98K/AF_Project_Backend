const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongo = require('mongoose')
const cors = require('cors');
const it19134536 = require('./it19134536.js')
const it19167992 = require('./it19167992.js')
const it19136134 = require('./it19136134.js')
const it19135830 = require('./it19135830.js')

app.use(cors());
app.use(bodyParser.json({ type: "application/*+json", limit: "50mb" }));

app.use(

  bodyParser.urlencoded({

    limit: "50mb",

    parameterLimit: 100000,

    extended: true,

  })

);


mongo.connect('mongodb+srv://root:root@cluster0.pikdq.mongodb.net/icafDB?retryWrites=true&w=majority', {useNewUrlParser:true})

mongo.connection.once('open', function (){
    console.log('Mongo db connected')
})

app.route('/').get((req,res) => {
    res.send('Initial root');
});

//test change 

//change only here
app.use('/it19134536',it19134536());
app.use('/it19167992',it19167992());
app.use('/it19136134',it19136134());
app.use('/it19135830',it19135830());



var server = app.listen(5000, function () {
    console.log('Node server is running..');
});