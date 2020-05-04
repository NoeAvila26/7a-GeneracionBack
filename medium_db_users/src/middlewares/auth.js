const jwt = require('../lib/jwt')

function auth (request, response, next) {
  console.log('AUTH MIDDLEWARE')
  const { autorization: token } = request.headers
  console.log('token:', token)

  try {
    const decodToken = jwt.verify(token)
    console.log('decodedToken:', decodToken)
    next()
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'unauthorized'
    })
  }
}

module.exports = auth
