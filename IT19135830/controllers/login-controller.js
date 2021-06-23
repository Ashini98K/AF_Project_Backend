import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../../IT19136134/models/user-model';

export const login = async (req, res) => {
    const{ email, password} = req.body;

    try{
        const existingUser = await User.findOne({email});
        if (!existingUser) return res.status(404).json({message:"User does not exist."})

        const passwordCheck = await bcrypt.compare(password, existingUser.password);

        if(!passwordCheck) return res.status(400).json({message:"Entered Password is Incorrect"});

        const jwToken = jwt.sign({email: existingUser.email, id: existingUser._id}, 'test', {expiresIn: "1h"});

        res.status(200).json({result: existingUser, jwToken});
    }catch (error){
        res.status(500).json({message:'Something went wrong.'});

    }


}

