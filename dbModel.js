const mongoose = require('mongoose');

const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    likes: String,
    comments: String,
    description: String,
    shares: String,

});

// Collection inside the database
module.exports = mongoose.model('tiktokVideos', tiktokSchema);