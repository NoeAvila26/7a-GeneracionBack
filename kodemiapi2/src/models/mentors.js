const mongoose = require('mongoose')
const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    minlenght: 2,
    maxlenght: 100,
    required: true
  },
  generation: {
    type: Number,
    required: true,
    min: 1
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlenght: 6
  }

})

module.exports = mongoose.model('mentors', mentorSchema)
