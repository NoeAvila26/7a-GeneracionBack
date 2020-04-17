const http =require ('http')

const server = http.createServer((request,response) => {
  response.writeHead(200, {
    'content-type':'text/html'
  })
  console.log('METHOD:',request.method)
  console.log('URL:', request.url)

  if (request.url === '/hola') {
    response.write('<h1>HOLA MUNDO DESDE NODE HTTP</h1>')
  }

  if (request.url === '/adios') {
    response.write('<h2>adios desde node</h2>')
  }
  
  response.end()

})

server.listen(8081)

