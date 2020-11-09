const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
   username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    cohort_number: {
        type: String,
        required: true,
        trim: true
    },
    month: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: String,
        required: true,
        trim: true,
    }
}
);

const Birthday = mongoose.model('Birthday', userSchema);

  module.exports = Birthday;
