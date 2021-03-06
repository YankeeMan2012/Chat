const mongoose = require('../libs/mongoose');

const schema = new mongoose.Schema({
    username : {
        type: String,
        unique: true,
        required: true
    },
    token : {
        type: String,
        required: true
    }
});

exports.User = mongoose.model('User', schema);
