
/*constructor de promesa
promise ((resolve, reject)=>{
  if (todo ok) {
    resolve('ok')
    return
  }
  reject('error')
})
*/
//si quiero crear una promesa
/*
const miPrimerPromesa = new Promise((resolve, reject)=>{
  if(todo ok){
    resolve('ok')
    return
  }
  reject('error')
})
*/

/*
const miPrimerPromesa = new Promise((resolve, reject)=>{
  if(todo mal){
    resolve('todo mal')
    return
  }
  reject('ok')
})
miPrimerPromesa
.then(() => { //recibe lo que pasa en resolve
  console.log('resultado',resultado)// resultado:ok
})
.catch((error) => {
  console.log('error:',error) // error:'todo mal'
})
*/
/*
  function miPrimerPromesa () {
    return new Promise((resolve, reject) =>{
      if(todo mal){
        reject('todo esta en llamas')
        return
      }
      resolve('todo cool')
    })
  }
  miPrimerPromesa()
  .then((result) => console.log(result))
  .catch((error) => console.log(error))

*/

const muro = {
  estaConstruido: false,
  estaAplanado: false,
  estaPintado: false
}

function construir(muroAConstruir, callback) {
  setTimeout(() => {
    muroAConstruir.estaConstruido = true
    let error = muroAConstruir.estaConstruido
      ? null
      : 'no se pudo construir el muro'
    callback(error, muroAConstruir)
  }, 3000)
}

function aplanar(muroAAplanar, callback) {
  setTimeout(() => {
    muroAAplanar.estaAplanado = true
    let error = muroAAplanar.estaAplanado
      ? null
      : 'no se pudo aplanar'
    callback(error, muroAAplanar)
  }, 3000)
}

function pintar(muroAPintar, callback) {
  setTimeout(() => {
    muroAPintar.estaPintado = true
    let error = muroAPintar.estaPintado
      ? null
      : 'no se puede aplanar'
    callback(error, muroAPintar)

  }, 3000)
}

//promificacio
//el procesos de wrappear una funcion que hace uso de callbacks para que ahora sea una promesa


function construirPromificada(muroAConstruir) {
  return new Promise((resolve, reject) => {
    construir(muroAConstruir, (error, muroConstruido) => {
      if (error) {
        reject(error)
        return
      }
      resolve(muroConstruido)
    })
  })
}

function aplanarPromificada(muroAAplanar) {
  return new Promise((resolve, reject) => {
    aplanar(muroAAplanar, (error, muroAplanado) => {
      if (error) {
        reject(error)
        return
      }
      resolve(muroAplanado)
    })
  })
}

function pintarPromificada(muroAPintar) {
  return new Promise((resolve, reject) => {
    pintar(muroAPintar, (error, muroPintado) => {
      if (error) {
        reject(error)
        return
      }
      resolve(muroPintado)
    })
  })
}


construirPromificada(muro)
  .then((muroConstruido) => {
    console.log('muroConstruido:', muroConstruido)
    aplanarPromificada(muroConstruido)
      .then((muroAplanado) => {
        console.log('muroAplanado:', muroAplanado)
        pintarPromificada(muroAplanado)
          .then((muroPintado) => {
            console.log('muroPintado:', muroPintado)
          })
          .catch(error => console.error('error:', error))
      })
      .catch(error => console.error('error:', error))
  })
  .catch(error => console.error('error:', error))


//async/await
//await construirPromificada(muro)
//las funciones marcadas con await,regresan una promesa
//donde use await, la funcion que la contiene de ser marcada como asincrona
/*
async function principal() {
  await construirPromificada(muro)
}
*/

// async function principal() {
//   const muroConstruido = await construirPromificada(muro)
//   console.log('muroConstruido:'muroConstruido)
//   const muroAplanado = await aplanarPromificada(muroConstruido)
//   console.log('muroAplanado:', muroAplanado)
//   const muroPintado = await pintarPromificada(muroConstruido)
//   console.log('muroPintado:', muroPintado)
//   return muroPintado
// }

// principal()
//   .then(resultado => {
//     console.log('resultado:', resultado)
//     console.log('Fin')

//   })
//   .catch(error => console.error('ERROR:', error))














