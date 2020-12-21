const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const test = require('./modules/test')
const login = require('./modules/login')
const logout = require('./modules/logout')

router.use('/', home)
router.use('/test', test)
router.use('/login', login)
router.use('/logout', logout)

module.exports = router