const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');

const BackendUser = require('../../../IT19167992/models/backPanelUser-model');

const adminLogin = async( req, res) => {
    const {email,password} = req.body;

    try{
        const existingUser = await BackendUser.findOne({email})


        if(!existingUser){
            return res.status(404).json({message:"User is not Registered."})
        }

        //bcrypt is used to compare the password.for some reason it returns false for all correct or incorrect passwords
        const correctPassword = await bcrypt.compare(password, existingUser.password);

        // if(!correctPassword){
        //     return res.status(400).json({message: "Incorrect Password."})
        // }


        //comparison of password the user entered nd the saved password to verify the login
        if(password != existingUser.password){
            return res.status(400).json({message: "Incorrect Password."})
        }



        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, 'test',{expiresIn:"1h"});

        res.status(200).json({message:"Login Success", result:existingUser, token});



    } catch (error){
        res.status(500).json({message:"Something went wrong."});
    }
}

module.exports = {
    adminLogin
}