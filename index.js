const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Anime = require('./models/anime-Schema');
const Manga = require('./models/manga-Schema');

mongoose.connect('mongodb://localhost:27017/animeApp', { userNewUrlParser: true })
    .then(() => {
        console.log('Mongo CONNECTION OPEN!')
    })
    .catch(err => {
        console.log('Mongo OHH no error!')
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/anime', (req, res) => {
    res.send('Hello from Anime App!!')
})


app.listen(3000, () => {
    console.log('APP IS LISTENING ON PORT 3000')
})