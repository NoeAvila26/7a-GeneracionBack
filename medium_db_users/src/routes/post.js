const express = require('express')
const posts = require('../usecases/posts')
// const auth = require('../middlewares/auth')
const router = express.Router()

router.get('/', async (request, response) => {
  const allPosts = await posts.getAll()
  response.json({
    message: 'all posts',
    data: {
      posts: allPosts
    }
  })
})

router.post('/', async (request, response) => {
  try {
    const newPost = await posts.create(request.body)
    response.json({
      message: 'post created',
      data: {
        post: newPost
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      succes: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const postDeleted = await posts.deleteById(id)
    response.json({
      success: true,
      message: `post with id ${id} deleted`,
      data: {
        post: postDeleted
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const postUpDated = await posts.updateById(id, request.body)
    response.json({
      success: true,
      message: `mentor with id ${id} updated`,
      data: {
        post: postUpDated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      succes: false,
      message: error.message
    })
  }
})

module.exports = router
