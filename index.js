const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Anime = require('./models/animeStore');
const Manga = require('./models/mangaStore');

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

app.get('/animeStore', async (req, res) => {
    const animes = await Anime.find({})
    // console.log(animeStore)
    // res.send('Hello from Anime App!!')

    res.render('products/anime-store', { animes })
})

app.get('/mangaStore', async (req, res) => {
    const mangas = await Manga.find({})
    // console.log(mangaStore)
    // res.send('Hello from Manga App!!')
    res.render('products/manga-store', { mangas })
})


app.listen(3000, () => {
    console.log('APP IS LISTENING ON PORT 3000')
})