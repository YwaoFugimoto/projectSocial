const getLyrics = require("../lib/getLyrics");
const getSong = require('../lib/getSong');
const options={
    apiKey:'Z8rh4W0g9CuL7eMFW-7YIdJZLc__guPGo_jXx11r4mYQJi1W7R7vIFJPHq5YKIIK',
    title: 'ball w/o you',
    artist: '21 savage',
    optimizeQuery:true
}

getLyrics(options).then((lyrics) => console.log(lyrics));
getSong(options).then((song) => 
    console.log(`${song.lyrics}`)
)