const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.get('/', (req, res) => {
    if (req.signedCookies['connect.sid'] === req.session.id) return res.send('cookie works here!!! <a href="/">home</a>')
    return res.redirect('/login')
})

module.exports = router