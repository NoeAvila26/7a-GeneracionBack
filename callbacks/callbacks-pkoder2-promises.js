const koder = {
  koderLLamado: false,
  koderEntrevistado: false,
  koderApartandoSuLugar: false,
  koderAsistiendo: false
}

function llamada(koderALLamar, callback) {
  setTimeout(() => {
    koderALLamar.koderLLamado = true
    let error = koderALLamar.koderLLamado
      ? null
      : 'no se pudo inscribir al koder'
    callback(error, koderALLamar)
  }, 3000)
}

function entrevista(koderAEntrevistar, callback) {
  setTimeout(() => {
    koderAEntrevistar.koderEntrevistado = true
    let error = koderAEntrevistar.koderEntrevistado
      ? null
      : 'no se pudo entrevistar'
    callback(error, koderAEntrevistar)
  }, 3000)
}

function apartado(koderApuntoDeApartar, callback) {
  setTimeout(() => {
    koderApuntoDeApartar.koderApartandoSuLugar = true
    let error = koderApuntoDeApartar.koderApartandoSuLugar
      ? null
      : 'no se pudo apartar'
    callback(error, koderApuntoDeApartar)
  }, 3000)
}

function asistencia(koderAPuntoDeAsistir, callback) {
  setTimeout(() => {
    koderAPuntoDeAsistir.koderAsistiendo = true
    let error = koderAPuntoDeAsistir.koderAsistiendo
      ? null
      : 'no pudo asisitir'
    callback(error, koderAPuntoDeAsistir)
  }, 3000)
}

// llamada(koder,(errorDeLLamada, koderLLamado) => {
//   if(errorDeLLamada){
//     console.error('errorDeLLamada:',errorDeLLamada)
//     return
//   }
//   entrevista(koderLLamado,(errorDeEntrevista, koderEntrevistado) => {
//     if(errorDeEntrevista){
//       console.error('errorDeEntrevista:',errorDeEntrevista)
//       return
//     }
//     apartado(koderEntrevistado,(errorDeApartado, koderApartado) => {
//       if(errorDeApartado){
//         console.error('errorDeApartado:',errorDeApartado)
//         return
//       }
//       asistencia(koderApartado,(errorDeAsistencia, koderAsistiendo ) => {
//         if(errorDeAsistencia){
//           console.error('errorDeAsistencia:',errorDeAsistencia)
//           return
//       }
//            console.log('koderAsistiendo:',koderAsistiendo)
//       })
//     })
//   })
// })

function llamadaPromificada(koderALLamar) {
  return new Promise((resolve, reject) => {
    llamada(koderALLamar, (error, koderLLamado) => {
      if (error) {
        reject(error)
        return
      }
      resolve(koderLLamado)
    })
  })
}

function entrevistaPromificada(koderAEntrevistar) {
  return new Promise((resolve, reject) => {
    entrevista(koderAEntrevistar, (error, koderEntrevistado) => {
      if (error) {
        reject(error)
        return
      }
      resolve(koderEntrevistado)
    })
  })
}

function apartadoPromificada(koderApuntoDeApartar) {
  return new Promise((resolve, reject) => {
    apartado(koderApuntoDeApartar, (error, koderApartandoSuLugar) => {
      if (error) {
        reject(error)
        return
      }
      resolve(koderApartandoSuLugar)
    })
  })
}


function asistenciaPromificada(koderAPuntoDeAsistir) {
  return new Promise((resolve, reject) => {
    asistencia(koderAPuntoDeAsistir, (error, koderAsistiendo) => {
      if (error) {
        reject(error)
        return
      }
      resolve(koderAsistiendo)
    })
  })
}



// llamadaPromificada(koder)
//   .then(koderLLamado => {
//     console.log('koderLLamado:', koderLLamado)
//     entrevistaPromificada(koderLLamado)
//       .then(koderEntrevistado => {
//         console.log('koderEntrevistado:', koderEntrevistado)
//         apartadoPromificada(koderEntrevistado)
//           .then(koderApartandoSuLugar => {
//             console.log('koderApartandoSuLugar:', koderApartandoSuLugar)
//             asistenciaPromificada(koderApartandoSuLugar)
//               .then(koderAsistiendo => {
//                 console.log('koderAsistiendo:', koderAsistiendo)
//               })
//               .catch(error => console.error('error entrevista:', error))
                
//           })
//           .catch(error => console.error('error apartado:', error))
            
//       })
//       .catch(error => console.error('error asistiendo:', error))
        
//   })
//   .catch(error => console.error('error:', error))
    


async function principal() {
  const koderLLamado = await llamadaPromificada(koder)
  console.log('koderLLamado:',koderLLamado)
  const koderEntrevistado = await entrevistaPromificada(koderLLamado)
  console.log('koderEntrevistado:', koderEntrevistado)
  const koderApartandoSuLugar = await apartadoPromificada(koderLLamado)
  console.log('koderApartandoSuLugar:', koderApartandoSuLugar)
  const koderAsistiendo = await asistenciaPromificada(koderApartandoSuLugar)
  console.log('koderAsistiendo:', koderAsistiendo)
  return koderAsistiendo
}

principal()
  .then(resultado => {
    console.log('resultado:', resultado)
    console.log('Fin')

  })
  .catch(error => console.error('ERROR:', error))

              
