const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const StudentSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Student = mongoose.model('students', StudentSchema)
