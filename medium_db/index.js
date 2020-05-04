const server = require('./src/server')
const db = require('./src/lib/db')

async function main () {
  await db.connect()
  console.log('-DB CONNECTED-')
  server.listen(8083, () => {
    console.log('SERVER IS RUNNING')
  })
}
main()
  .then(() => {
    console.log('SERVER IS READY')
  })
  .catch(error => console.error('ERROR:', error))
