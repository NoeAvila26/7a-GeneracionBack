const Post = require('../models/posts')

async function getAll () {
  const allPosts = await Post.find()
  return allPosts
}

function create (postData) {
  return Post.create(postData)
}

function deleteById (id) {
  return Post.findByIdAndRemove(id)
}

function updateById (id, newPostData) {
  return Post.findByIdAndUpdate(id, newPostData)
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById
}
