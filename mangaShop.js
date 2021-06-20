const mongoose = require('mongoose');
const Manga = require('./models/mangaShow');

mongoose.connect('mongodb://localhost:27017/animeApp', { userNewUrlParser: true })
    .then(() => {
        console.log('Mongo CONNECTION OPEN!')
    })
    .catch(err => {
        console.log('Mongo OHH no error!')
        console.log(err)
    })

const mangaStore = [
    {
        name: 'Attack on Titan',
        score: 8.61,
        author: 'Hajime Isayama',
        volumes: 33,
        priceEach: 10.99,
        category: 'Shounen'
    },
    {
        name: 'Fairy Tail',
        score: 7.62,
        author: 'Hiro Mashima',
        volumes: 63,
        priceEach: 10.99,
        category: 'Shounen'
    },
    {
        name: 'Fullmetal Alchemist',
        score: 9.08,
        author: 'Hiromu Arakawa',
        volumes: 27,
        priceEach: 6.99,
        category: 'Shounen'
    },
    {
        name: 'Cardcaptor Sakura Collector’s Edition',
        score: 8.39,
        author: 'CLAMP',
        volumes: 6,
        priceEach: 13.99,
        category: 'Shoujo'
    },
    {
        name: 'Sailor Moon Eternal Edition',
        score: 8.20,
        author: 'Naoko Takeuchi',
        volumes: 9,
        priceEach: 13.99,
        category: 'Shoujo'
    },
    {
        name: 'Angels of Death',
        score: 7.64,
        author: 'By (author) Kudan Naduka, By (artist) Makoto Sanada',
        volumes: 10,
        priceEach: 6.99,
        category: 'Josei'
    }
]

Manga.insertMany(mangaStore)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })