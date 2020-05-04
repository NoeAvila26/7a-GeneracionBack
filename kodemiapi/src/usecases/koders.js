
const bcrypt = require('bcrypt')

const jwt = require('../lib/jwt')

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

// 1.- validar existencia del koder
// 2.- crear el hash encriptado del password
// 3.- creamos el koder

async function signup (newKoderData) {
  const { email, password } = newKoderData
  if (!email) throw new Error('email is required')
  const koderAlreadyExists = await Koder.findOne({ email })

  // if inline
  if (koderAlreadyExists) throw new Error('email is already registered')
  if (password.length < 6) throw new Error('password must be 6 characters minimum')
  // crear el hash

  const hash = await bcrypt.hash(password, 8)

  return Koder.create({ ...newKoderData, password: hash })
}

async function login (email, password) {
  const koder = await Koder.findOne({ email })
  if (!koder) throw new Error('invalid data')

  const isPasswordCorrect = await bcrypt.compare(password, koder.password)
  if (!isPasswordCorrect) throw new Error('invalid data')

  return jwt.sign({ id: koder._id })
}

module.exports = {
  login,
  signup,
  getAll,
  create,
  deleteById,
  updateById
}

// en la ruta
// const koders = require('..koders')
// koders.getAll
