const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
    },
    password: {
        type: String
    },
    skills: {
        type: [String]
    }

});

module.exports.User = mongoose.model('User', userSchema);