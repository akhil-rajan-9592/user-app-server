const route = require('express').Router()
const user = require('../controller/registerController')

route.post('/register', user.register)
route.post('/login', user.login)
route.get('/read/:id', user.read)

module.exports = route