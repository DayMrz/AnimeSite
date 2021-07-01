const mongoose = require('mongoose');


const animeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    premiered: {
        type: Number,
        required: true,
        min: 0
    },
    score: {
        type: Number,
        required: true,
        min: 0
    },
    ranked: {
        type: Number,
        required: true,
        min: 0
    },
    studios: {
        type: String,
        required: true
    },
    genres: {
        type: [String],
        enum: ['Kodomomuke', 'Shounen', 'Shoujo', 'Josei', 'Ladies Comics', 'Seinen', 'Seijin', 'Action', 'Adventure', 'Comedy', 'Super Power', 'Drama', 'Sports', 'Fantasy', 'Supernatural', 'Martial Arts', 'Police', 'Thriller', 'Psychological', 'Kids']
    },
    image: String
    //create a doc call manga, specified price, qty and if it is onSale or OutStock

})

const Anime = mongoose.model('Anime', animeSchema);

module.exports = Anime;