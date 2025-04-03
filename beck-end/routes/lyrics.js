const dot = require('dotenv').config();
const getLyrics = require("../lib/getLyrics");
const getSong = require('../lib/getSong');
const options={
    apiKey:dotprocess.env.API_KEY_SECRET,
    title: 'ball w/o you',
    artist: '21 savage',
    optimizeQuery:true
}

getLyrics(options).then((lyrics) => console.log(lyrics));
getSong(options).then((song) => 
    console.log(`${song.lyrics}`)
)