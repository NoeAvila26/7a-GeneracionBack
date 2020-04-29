const express = require('express')
const koders = require('../usecases/koders')
const router = express.Router()

router.get('/', async (request, response) => {
  const allKoders = await koders.getAll()
  response.json({
    message: 'all koders',
    data: {
      koders: allKoders
    }
  })
})

// se pueden ocupar estas dos opciones

// router.post('/', async (request, response) => {
//   const errorObject = {}
//   try {
//     const { name, generation, email, password } = request.body

//     if (!name) {
//       errorObject.name = 'name is required'
//     }
//     if (password.length < 6) {
//       errorObject.password = 'password is not long enough'
//     }
//     if(Object.entries(errorObject).length )

router.post('/', async (request, response) => {
  try {
    const newKoder = await koders.create(request.body)
    response.json({
      message: 'koder created',
      data: {
        koder: newKoder
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

// router.post('/', async (request, response) => {
//   const { name, generation, email, password } = request.body
//   const newKoder = { name, generation, email, password }
//   const koderCreated = await koders.create(newKoder)

//   response.json({
//     message: 'new koder added',
//     data: {
//       koder: koderCreated
//     }
//   })
// })

// implementar delete /koders / mediante un id
// patch /koders/ id

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const koderDeleted = await koders.deleteById(id)
    response.json({
      success: true,
      message: `koder with id ${id} deleted`,
      data: {
        koder: koderDeleted
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
    const koderUpdated = await koders.updateById(id, request.body)
    response.json({
      success: true,
      message: `koder with id ${id} updated`,
      data: {
        koder: koderUpdated
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

module.exports = router
