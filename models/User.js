const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    number: {
        type: String,
        required: true
    }
}, {timestamps: true});

userSchema.methods.generateJWT = function(){
    const token = jwt.sign({
        _id: this._id,
        number: this.number,
    }, process.env.JWT_SECRET_KEY, {expiresIn: "7d"});
}

const User = mongoose.model('User', userSchema);

module.exports = User;