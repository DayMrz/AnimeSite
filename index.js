const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Anime = require('./models/animeStore');
const Manga = require('./models/mangaStore');

mongoose.connect('mongodb://localhost:27017/animeApp', { userNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo CONNECTION OPEN!')
    })
    .catch(err => {
        console.log('Mongo OHH no error!')
        console.log(err)
    })

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.send('Holi!')
    res.render('products/home')
})

app.get('/store', async (req, res) => {
    res.render('products/store')
})
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

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const anime = await Anime.findById(id)
    // console.log(foundAnime)
    // res.send('anime found!')
    res.render('products/animeShow', { anime })
})

app.get('/product/:id', async (req, res) => {
    const { id } = req.params;
    const manga = await Manga.findById(id)
    // console.log(foundManga)
    // res.send('Manga found!')
    res.render('products/mangaShow', { manga })
})


app.listen(3000, () => {
    console.log('APP IS LISTENING ON PORT 3000')
})