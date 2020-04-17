// const colors = require('colors/safe')
// const moment = require('moment')
// const name = 'noe'
// const time = moment().format('LTS')
// console.log(colors.rainbow(`hola${name} son las ${time}`))

const colors = require('colors/safe')
const moment = require('moment')

const printNameandHour = (name) => {
  const date = colors.rainbow(`hola ${name} son las ${moment().format('LTS')}`)
  console.log(date)
}
printNameandHour('Noe')
printNameandHour(' a todos!!')
