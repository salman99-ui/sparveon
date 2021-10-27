const express    = require('express')
const controller = require('../Controller/auth')
var Routes       = express.Router()


Routes.post('/register' , controller.register)
Routes.post('/login' , controller.login)

module.exports = Routes