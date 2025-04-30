const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    role: {
        type: String,
        enum: ['admin', 'client'],
        default: 'client'
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;