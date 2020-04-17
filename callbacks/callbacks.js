/*
1-construir la pared
1-aplanar la pared
1-pintar l apared
*/

//funciones que ejecutan callbacks
//fs.readdir(path, () => {}) <= no
//function readdir(args, callback) {} <= si

//declaracion de una funcion
//function construir () {
//...comportamiento
//}
//
//uso de la funcion
//construir()

const muro = {
  estaConstruido: false,
  estaAplanado: false,
  estaPintado: false
}

function construir (muroAConstruir, callback) {
  setTimeout(() => {
    muroAConstruir.estaConstruido = true
   let error = muroAConstruir.estaConstruido 
   ? null
   : 'no se pudo construir el muro'
    callback(error, muroAConstruir)
  }, 3000)
}

function aplanar (muroAAplanar, callback) {
  setTimeout(() => {
    muroAAplanar.estaAplanado = true
    let error = muroAAplanar.estaAplanado 
    ? null 
    : 'no se pudo aplanar'
    callback(error, muroAAplanar)
  }, 3000)
}

function pintar (muroAPintar, callback) {
  setTimeout(() => {
    muroAPintar.estaPintado = true
    let error = muroAPintar.estaPintado
    ? null
    :'no se puede aplanar'
    callback(error, muroAPintar)

  }, 3000)
}


construir(muro,(errorDeConstruccion, muroConstruido) => {
  if(errorDeConstruccion){
    console.error('errorDeConstruccion:',errorDeConstruccion)
    return
  }
  console.log('muroConstruido')
  aplanar(muroConstruido,(errorDeAplanado, muroAplanado) => {
    if(errorDeAplanado){
      console.error('errorDeAplanado:',errorDeAplanado)
      return
    }
    console.log('muroAplanado')
    pintar(muroAplanado,(errorDePintado, muroPintado ) => {
      if(errorDePintado){
        console.error('errorDePintado:',errorDePintado)
        return
      }
      console.log('muroPintado:',muroPintado)
    })
  })
})






















  


// function construir (muroAConstruir) {
//   muroAConstruir.estaConstruido = true
//   return muroAConstruir
// }

// function aplanar (muroAAplanar) {
//   muroAAplanar.estaAplanado = true
//   return muroAAplanar
// }

// function pintar (muroAPintar) {
//   muroAPintar.estaPintado = true
//   return muroAPintar
// }



// const muroConstruido = construir(muro)
// const muroAplanado = apalanar(muroConstruido)
// const muroPintado = pintar(muroAplanado)

// console.log(muroAplanado)

// construir(muro)
// aplanar(muro)
// pintar(muro)

// console.log('muro:')