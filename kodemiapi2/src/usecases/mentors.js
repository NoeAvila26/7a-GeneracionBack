const Mentor = require('../models/mentors')

async function getAll () {
  const allMentors = await Mentor.find()
  return allMentors
}

function create (mentorData) {
  return Mentor.create(mentorData)
}

function deleteById (id) {
  return Mentor.deleteById(id)
}

function upDateById (id, newMentorData) {
  return Mentor.upDateById(id, newMentorData)
}

module.exports = {
  getAll,
  create,
  deleteById,
  upDateById
}
