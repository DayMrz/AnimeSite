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
        genres: 'Shounen',
        image: 'https://lh3.googleusercontent.com/-Z7sVBTfQk5Y/V69D-sBzlgI/AAAAAAAAAes/Cc-u3nCKrZA/%25255BUNSET%25255D.png'
    },
    {
        title: 'Konosuba',
        premiered: 2016,
        score: 8.14,
        ranked: 375,
        studios: 'Studio Den',
        genres: 'Fantasy',
        image: 'https://vignette.wikia.nocookie.net/konosuba/images/0/00/Konosuba_BD_1_Cover.jpg/revision/latest/scale-to-width-down/350?cb=20200121144514'
    },
    {
        title: 'Black Clover',
        premiered: 2017,
        score: 7.99,
        ranked: 553,
        studios: 'Studio Pierrot',
        genres: 'Shounen',
        image: 'https://th.bing.com/th/id/Ra597435d042c36c52af86d033e829442?rik=2bkmhOTeaHqoHw&riu=http%3a%2f%2fvignette2.wikia.nocookie.net%2fblackclover%2fimages%2f9%2f98%2fAsta_profile.png%2frevision%2flatest%3fcb%3d20160711084122%26path-prefix%3dfr&ehk=bBvNdSHNyXltMB9tJi00Qeo9J6%2bcAGZs4do2OQLKwqI%3d&risl=&pid=ImgRaw'
    },
    {
        title: 'Boku no Hero Academia',
        premiered: 2019,
        score: 8.02,
        ranked: 519,
        studios: 'Bones',
        genres: 'Shounen',
        image: 'https://i.pinimg.com/originals/58/eb/71/58eb716c404691be7168e2b9761bfae6.png'
    },
    {
        title: 'Mob Psycho 100',
        premiered: 2019,
        score: 8.83,
        ranked: 22,
        studios: 'Bones',
        genres: 'Supernatural',
        image: 'https://i.pinimg.com/originals/bd/bc/67/bdbc672f80e204a139e3985aa77f0cf9.png'
    },
    {
        title: 'The God of High School',
        premiered: 2020,
        score: 8.02,
        ranked: 3488,
        studios: 'MAPPA',
        genres: 'Supernatural',
        image: 'https://th.bing.com/th/id/R19a322429ea4ab1203ac47ea0919e64f?rik=XsDDsm5YZW47GQ&riu=http%3a%2f%2fwww.anime-planet.com%2fimages%2fmanga%2fcovers%2fthe-god-of-high-school-8417.jpg&ehk=m3M7NGqOH%2fnco4FBH7NIlnIL3pbJYrfzu%2btTW17F%2fUc%3d&risl=&pid=ImgRaw'
    },
    {
        title: 'Sword Art Online: Alicization',
        premiered: 2019,
        score: 7.60,
        ranked: 1281,
        studios: 'A-1 Pictures',
        genres: 'Fantasy',
        image: 'https://th.bing.com/th/id/R688dd0079f795e1827548fcd6662c982?rik=CovtaebPN90R%2bg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-12EE_Azmz_Q%2fVi44HyLEW6I%2fAAAAAAAAB30%2fbNms44I2Cps%2fs400%2fSword%252BArt%252BOnline%252BAsuna%252BYuuki%25252BKonno%252BYuuki%25252BKirito%252BKakoii%252BCalendar%252BRender.png&ehk=JA%2bnyRdHBSkruNInqsc6LPhFqZ36kbEhghuXwTuUgug%3d&risl=&pid=ImgRaw'
    },
    {
        title: 'Captain Tsubasa',
        premiered: 2018,
        score: 5,
        ranked: 1864,
        studios: 'David Production',
        genres: 'Sports',
        image: 'https://4anime.to/image/Captain-Tsubasa-2018-Cover.jpg'
    }
]

Anime.insertMany(animeStore)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })