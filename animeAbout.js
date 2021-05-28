const mongoose = require('mongoose');
const Anime = require('./models/anime-Schema');

mongoose.connect('mongodb://localhost:27017/animeApp', { userNewUrlParser: true })
    .then(() => {
        console.log('Mongo CONNECTION OPEN!')
    })
    .catch(err => {
        console.log('Mongo OHH no error!')
        console.log(err)
    })

const animeView = [
    {
        title: 'One Piece',
        premiered: 1999,
        score: 8.55,
        ranked: 84,
        studios: 'Toei Animation'
    },
    {
        title: 'Konosuba',
        premiered: 2016,
        score: 8.14,
        ranked: 375,
        studios: 'Studio Den'
    },
    {
        title: 'Black Clover',
        premiered: 2017,
        score: 7.99,
        ranked: 553,
        studios: 'Studio Pierrot'
    },
    {
        title: 'Boku no Hero Academia',
        premiered: 2019,
        score: 8.02,
        ranked: 519,
        studios: 'Bones'
    },
    {
        title: 'Mob Psycho 100',
        premiered: 2019,
        score: 8.83,
        ranked: 22,
        studios: 'Bones'
    },
    {
        title: 'The God of High School',
        premiered: 2020,
        score: 8.02,
        ranked: 3488,
        studios: 'MAPPA'
    },
    {
        title: 'Sword Art Online: Alicization',
        premiered: 2019,
        score: 7.60,
        ranked: 1281,
        studios: 'A-1 Pictures'
    },
    {
        title: 'Captain Tsubasa',
        premiered: 2018,
        score: 5,
        ranked: 1864,
        studios: 'David Production'
    }
]

Anime.insertMany(animeView)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })