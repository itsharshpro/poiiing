const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username:{type: String, required: true, unique: true},
    fullName:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    profileImageUrl:{type: String, default: null},
    bookmarkedPolls:[{type: mongoose.Schema.Types.ObjectId, ref: 'Poll'}],
}, {timestamps: true});

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.comparePassword = async function(candidatePassword){
    return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);