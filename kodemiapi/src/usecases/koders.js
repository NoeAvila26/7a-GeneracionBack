const Koder = require('../models/koders')

async function getAll () {
  const allKoders = await Koder.find()
  return allKoders
}

// function getAll () {
//   return Koder.find()
// }

// async function create (koderData) {
//   const koderCreated = await Koder.create(koderData)
//   return koderCreated
// }

function create (koderData) {
  return Koder.create(koderData)
}

// async function create (koderData) {
//   const newKoder = new Koder(koderData)
//   const koderCreated = await newKoder.create(koderData)
//   return koderCreated
// }

function deleteById (id) {
  return Koder.findByIdAndRemove(id)
}

function updateById (id, newKoderData) {
  return Koder.findByIdAndUpdate(id, newKoderData)
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById
}

// en la ruta
// cosnt koders = require('..koders')
// koders.getAll
