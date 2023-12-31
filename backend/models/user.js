const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    favoriteLocations: {
        type: [String],
        default: [],
    },
}, { timestamps: true });

const userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;