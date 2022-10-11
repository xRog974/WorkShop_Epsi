const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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