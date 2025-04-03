const mongoose = require('mongoose')

const postSchema = new mongoose.Schema ({
    music_name: {
        type: String,
        required: true
    },
    artis_name: {
        type: String,
        required: true
    },
    postedBy: {
        type: String,
        required: true
    }
})