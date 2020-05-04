const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
  category: {
    type: String,
    minlength: 4,
    maxlength: 100,
    required: true
  },
  title: {
    type: String,
    minlength: 4,
    maxlength: 100,
    required: true
  },
  content: {
    type: String,
    minlength: 4,
    maxlength: 150,
    required: true
  },
  tagin: {
    type: String,
    required: true
  },
  author: {
    type: String,
    minlength: 4,
    maxlength: 100,
    require: true
  },
  publicationdate: {
    type: Date,
    required: true
  },
  timeofread: {
    type: String,
    required: true,
    min: 5

  },
  imageurl: {
    type: String,
    required: true
  }

})

module.exports = mongoose.model('posts', postSchema)
