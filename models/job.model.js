const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    skills: {
        type: [String],
    },
    createdAt: {
        type: Date,
    },

});

module.exports.Job = mongoose.model('Job', jobSchema);