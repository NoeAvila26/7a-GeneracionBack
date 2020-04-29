const express = require('express')
const mentors = require('../usecases/mentors')
const router = express.Router()

router.get('/', async (request, response) => {
  const allMentors = await mentors.getAll()
  response.json({
    message: 'all mentors',
    data: {
      koders: allMentors
    }
  })
})

router.post('/', async (request, response) => {
  try {
    const newMentor = await mentors.create(request.body)
    response.json({
      message: ' Mentor Created',
      data: {
        mentor: newMentor
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
    const mentorDeleted = await mentors.delteById(id)
    response.json({
      success: true,
      message: `mentor with id ${id} deleted`,
      data: {
        mentor: mentorDeleted
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
    const mentorUpDated = await mentors.upDateById(id, request.body)
    response.json({
      success: true,
      message: `mentor with id ${id} updated`,
      data: {
        mentor: mentorUpDated
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
