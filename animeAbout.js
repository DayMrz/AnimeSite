const mongoose = require('mongoose');
const Anime = require('./models/animeShow');

mongoose.connect('mongodb://localhost:27017/animeApp', { userNewUrlParser: true })
    .then(() => {
        console.log('Mongo CONNECTION OPEN!')
    })
    .catch(err => {
        console.log('Mongo OHH no error!')
        console.log(err)
    })

const animeStore = [
    {
        title: 'One Piece',
        premiered: 1999,
        score: 8.55,
        ranked: 84,
        studios: 'Toei Animation',
        genres: 'Shounen'
    },
    {
        title: 'Konosuba',
        premiered: 2016,
        score: 8.14,
        ranked: 375,
        studios: 'Studio Den',
        genres: 'Fantasy'
    },
    {
        title: 'Black Clover',
        premiered: 2017,
        score: 7.99,
        ranked: 553,
        studios: 'Studio Pierrot',
        genres: 'Shounen'
    },
    {
        title: 'Boku no Hero Academia',
        premiered: 2019,
        score: 8.02,
        ranked: 519,
        studios: 'Bones',
        genres: 'Shounen'
    },
    {
        title: 'Mob Psycho 100',
        premiered: 2019,
        score: 8.83,
        ranked: 22,
        studios: 'Bones',
        genres: 'Supernatural'
    },
    {
        title: 'The God of High School',
        premiered: 2020,
        score: 8.02,
        ranked: 3488,
        studios: 'MAPPA',
        genres: 'Supernatural'
    },
    {
        title: 'Sword Art Online: Alicization',
        premiered: 2019,
        score: 7.60,
        ranked: 1281,
        studios: 'A-1 Pictures',
        genres: 'Fantasy'
    },
    {
        title: 'Captain Tsubasa',
        premiered: 2018,
        score: 5,
        ranked: 1864,
        studios: 'David Production',
        genres: 'Sports'
    }
]

Anime.insertMany(animeStore)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })