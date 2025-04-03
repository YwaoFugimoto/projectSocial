const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({ // already creating auto ID
    user_login: {
        type: String,
        required: true
    },
    user_password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema);