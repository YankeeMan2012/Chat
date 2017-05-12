const path = require('path');
const mongoose = require('../libs/mongoose');

const schema = new mongoose.Schema({
    albumId: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    thumbnailUrl: {
        type: String,
        required: true
    }
});

exports.Photo = mongoose.model('Photo', schema);