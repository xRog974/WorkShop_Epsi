require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://webrookie:XEQbwvri3T7yJkH1@cluster0.a6aeav9.mongodb.net/test`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected"))
    .catch(err => console.error(err));