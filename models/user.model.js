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
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Skill'
    },

});

module.exports.User = mongoose.model('User', userSchema);