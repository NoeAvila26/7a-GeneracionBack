const mongoose = require('mongoose')

const user = 'NoeAvila'
const password = 'sofia2688'
const host = '7a-generacion-xw5aa.mongodb.net'
const dbName = 'kodemia'
const url = `mongodb+srv://${user}:${password}@${host}/${dbName}?retryWrites=true&w=majority`
const koderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 2

  },
  generation: {
    type: Number,
    required: true,
    min: 1
  },

  gender: {
    type: String,
    enum: ['m', 'f', 'n']
  }
  // isActive: {
  //   type: Boolean,
  //   required: true
  // },

  // date: {
  //   type: Date.UTC

  // }

})

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('SE CONECTO TODO CHIDO')
    const Koder = mongoose.model('Koders', koderSchema)
    // // koder.find({generation: 7})
    // // .then((koders) => {
    // //   console.log('koders:',koders)
    // // })
    // // .catch(error => console.error('ERROR EN LA CONSULTA', error))

    // const newKoder = new Koder ({name: 'nuevo koder', generation: 7, gender: 'n'})
    // // newKoder.validate() forzar la validacion
    // newKoder.save()
    // .then(() => console.log('new koder creado:'))
    // .catch(() => console.error('ERROR AL CREAR:',error))

    Koder.create({ name: 'nuevo koder shortcut', generation: 7, gender: 'n' }) // shortcut de new koder/sustituye lo de arriba
      .then(() => console.log('new koder creado'))
      .catch(error => console.error('ERROR AL CREAR:', error))
  })

  .catch(error => {
    console.error('ERROR EN CONNECT:', error)
  })
