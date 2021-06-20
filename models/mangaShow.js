const mongoose = require('mongoose');

const mangaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true,
        min: 0
    },
    author: {
        type: String,
        required: true
    },
    volumes: {
        type: Number,
        required: true
    },
    priceEach: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        enum: ['Kodomomuke', 'Shounen', 'Shoujo', 'Josei', 'Ladies Comics', 'Seinen', 'Seijin']
    }
})

const Manga = mongoose.model('Manga', mangaSchema);

module.exports = Manga;