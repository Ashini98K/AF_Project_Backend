import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../../IT19136134/models/user-model.js';

export const login = async( req, res) => {
    const { email, password} = req.body;

    try{
        const existingUser = await User.findOne({email})

        if(!existingUser){
            return res.status(404).json({message:"User is not Registered."})
        }

        const correctPassword = await  bcrypt.compare(password, existingUser.password);

        if(!correctPassword){
            return res.status(400).json({message: "Incorrect Password."})
        }

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, 'test',{expiresIn:"1h"});

        res.status(200).json({result:existingUser, token});


    } catch (error){
        res.status(500).json({message:"Something went wrong."});
    }
}