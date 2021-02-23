const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ReadingSchema = new Schema({
  pagesRead: {
    type: Number,
    required: true
  },  
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Reading = mongoose.model('reading', ReadingSchema)
