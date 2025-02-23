const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '1h'});
}

exports.registerUser = async (req, res) => {
    const {username, fullName, email, password, profileImageUrl} = req.body;

    if(!fullName || !username || !email || !password){
        return res.status(400).json({message: "All fields are required"});
    }
    

    const usernameRegex = /^[a-zA-Z0-9-]+$/;
    if(!usernameRegex.test(username)){
        return res.status(400).json({
            message: "Invalid username, only alphanumeric characters and hyphens are allowed. No spaces are permitted"
        });
    }

    try {
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "Email already in use"});
        }

        const existingUsername = await User.findOne({username});
        if(existingUsername){
            return res.status(400).json({message: "Username not available. Try another one."});
        }
        

        const user = await User.create({
            fullName,
            username,
            email,
            password,
            profileImageUrl,
        })
        
        res.status(201).json({
            id: user._id,
            user,
            token: generateToken(user._id),
        });
    } catch (err) {
        res.status(500).json({message: "Error registering user", error: err.message});
    }
}

exports.loginUser = async (req, res) => {
    const {email, password} = req.body;
    
    if(!email || !password){
        return res.status(400).json({message: "All fields are required"});
    }

    try {
        const user = await User.findOne({email});
        if(!user || !(await user.comparePassword(password))){
            return res.status(400).json({message: "Invalid credentials"});
        }

        res.status(200).json({
            id: user._id,
            user: {
                ...user.toObject(),
                totalPollsCreated : 0,
                totalPollsVotes : 0,
                totalPollsBookmarked : 0,
            },
            token: generateToken(user._id),
        });
    } catch (err) {
        res.status(500).json({message: "Error logging in user", error: err.message});
    }
}

exports.getUserInfo = async (req, res) => {}