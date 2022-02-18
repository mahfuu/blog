const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Daughter Blueprint
const daughterSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    bibleRef: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    text: String
})

module.exports = mongoose.model("Daughter", daughterSchema)