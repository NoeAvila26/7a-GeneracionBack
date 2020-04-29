const request = {
  body: {
    name:"charles",
    generation:7,
    age: 24
    phone: undefined,

  }
}

//deconstruccion

//decosntruccion de objeto

// const{atributos que quiero obtener} = el objeto a decosntruir (del que quiero sacar atributos)
const {name, generation, age} = request.body
console.log('name:', name)
console.log('generation:', generation)

//renombramiento en la cosntruccion
// se usa el operador
//lado izquierdo es el nombre del atributo como esta en el objeto
//lado derecho es el nombre deseado
const {name:koderName } = request.body
console.log('koderName:', koderName)

//dar un avalor por defecto
const {phone = '5555555555'} = request.body
console.log('phone:', phone)

//todo junto
const {name: mentorName = 'isra'} = request.body
console.log('mentorname:', mentorName)

//buenas practicas
//usar varias lineas al decosntruir mas de 2 atributos de un objeto

const {name: dudeName = 'dude', phone, age: dudeAge = 18, generation } = request.body  //no
const {
  name: dudeName = 'dude',
  phone,
  age: dudeAge = 18,
  generation
} = request.body // si



//---------------------------------------------------------------------------
// decosntruccion de arreglo


const koders = ['mar', 'elvira', 'airy', 'fer']

const mentors = [
  {
    name: 'isra'
  },
  {
    name:'david'
  },
  {
    name:'charles'
  }
]

const {name: mentorNameNew } = mentors[0]
console.log('newName:', newName)
//cosnt [elementos posicionales que quiero del arreglo] = arreglo aser decosntruido

const [x, y, z] //es util para sacar objetos del arreglo

console.log('z:', z)


// spread y rest operator (...)
//spread es esparcir, nos ayuda a sacar los valores de un objeto
//rest rest nos ayuda a agrupar el resto de atributos/miembros en un solo contenedor

//rest operator (..), se caracteriza por que se usa dentro de uan decosntruccion del lado izquierdo del igual

const {email, ...restoDelobjeto } = request.body
console.log('email.', email)
console.log('restoDelObjeto:', restoDelobjeto) //tipo objeto

//arrays
const [unKoder, otroKoder, ...restoDelArreglo ] = koders
console.log('unkoder:', unKoder)
console.log('restoDelArreglo:', restoDelArreglo)

//spread operator (...) pero del lado derecho del igual


const koderPersonal = {
  name: 'name',
  age: 'age',
}

const koderKodemiaInfo = {
  generation: 7,
  fechaDeIngreso: new Date()
}

const koderCompleto = {...koderPersonal, ...koderKodemiaInfo }
console.log('koderCompleto:', koderCompleto)

const koderMasCompleto = {
  colorFav: 'azul',
  peliculaFav: 'dora la exploradora',
  ...koderPersonal,
  ...koderKodemiaInfo
}
console.log('koderMasCompleto:', koderMasCompleto)

//array

const sextaGen = ['adan', 'itiel', 'luis']
const septimaGen = ['fer', 'omar', 'elvira']

const sextaYSeptima = [...sextaGen, ...septimaGen, 'ultimo']
const septimaYSexta = ['primero', ...septimaGen, ...sextaGen]
console.log('sextaYSeptima:', sextaYSeptima)
console.log('septimaYSexta:', septimaYSexta)
