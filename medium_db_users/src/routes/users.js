const express = require('express')
const users = require('../usecases/users')
const router = express.Router()
const auth = require('../middlewares/auth')

// router.use((request, response, next) => {
//   console.log('middleware router users')
// })

router.get('/', (request, response, next) => {
  console.log('middleware en GET/users')
  next()
}, async (request, response) => {
  try {
    const allUsers = await users.getAll()
    response.json({
      message: 'all users',
      data: {
        users: allUsers
      }
    })
  } catch (error) {
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.post('/', auth, async (request, response) => {
  try {
    const newUser = await users.create(request.body)
    response.json({
      success: true,
      message: 'user created',
      data: {
        user: newUser
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const userDeleted = await users.deleteById(id)
    response.json({
      succes: true,
      message: `user with id ${id} deleted`,
      data: {
        user: userDeleted
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
    const userUpDated = await users.updateById(id, request.body)
    response.json({
      success: true,
      message: `koder with id ${id} updated`,
      data: {
        user: userUpDated
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

router.post('/signup', async (request, response) => {
  try {
    const newUser = await users.signup(request.body)
    response.json({
      success: true,
      message: 'user registered',
      data: {
        user: newUser
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
