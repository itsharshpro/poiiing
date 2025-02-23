const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
    let token = req.headers.authorization?.split(" ")[1];
    
    if(!token) return res.status(401).json({message: "Not authorized, no token"});

    try{
        console.log(token);
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        
        req.user = await User.findById(decoded.id).select("-password");
        next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({message: "Not authorized, token failed"});
    }
};