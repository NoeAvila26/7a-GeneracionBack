const jwt = require('../lib/jwt')

// VERIFICAR que el jwt es expedido por este servidor

function auth (request, response, next) {
  console.log('AUTH MIDDLEWARE')
  const { authorization: token } = request.headers
  console.log('token:', token)

  try {
    const decodedToken = jwt.verify(token)
    console.log('decodedToken: ', decodedToken)
    next()
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'Unauthorized'

    })
  }
}

module.exports = auth
