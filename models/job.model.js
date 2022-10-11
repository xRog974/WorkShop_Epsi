const mongoose = require('mongoose');
const SkillModel = require('./skill.model');

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
        type: [SkillModel],
        require: true
    },
    createdAt: {
        type: Date,
        require: true,
    },
    userId:{
        type :String
    }
});

module.exports.JobModel = mongoose.model('Job', jobSchema);