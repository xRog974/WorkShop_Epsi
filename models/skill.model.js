const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    name: { 
        type: String, 
        require: true,
        unique: true,
     },
     category: {
        type: String,
        require: true,
        enum: {
            values: ['De base', 'Spécifique'],
            message: '{VALUE} is not supported'
          }
     },
     tag: {
        type: String,
        required: true,
        enum: {
            values: ['Savoir', 'Savoir-faire'],
            message: '{VALUE} is not supported'
          }
     },
});

module.exports.Skill = mongoose.model('Skill', skillSchema);