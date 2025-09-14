const User = require('../models/User');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');

const register = async(req, res)=>{
    try {
        const {name, email, password} = req.body;
        // Check if user already exists
        const exisitingUser = await User.findOne({email: email});
        if(exisitingUser) return res.status(400).json({message: "User already exists"});

        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        //create user
        const newUser = new User({
            name, email, password: hashedPassword
        });

        await newUser.save();   // <-- this actually inserts into DB
        //generate token
        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: '1h'});

        res.status(201).json({user: newUser, token});
        console.log("User registered successfully");
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    // console.log("register route hit");
    // res.send("register route hit");
}

const login = async (req, res)=>{

    try {
        const {email, password} = req.body;
        //check if user exists
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message: "User does not exist"});

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) return res.status(400).json({message: "invalid credentials"});

        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin},
             process.env.JWT_SECRET,
              {expiresIn: "7d"});

              res.status(200).json({message:"Login successful", user, token});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    // console.log("login route hit");
    // res.send("login route hit");
}

module.exports = {register, login};