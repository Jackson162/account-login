const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.get('/', (req, res) => {
    console.log('sid from latest cookie', req.signedCookies['connect.sid'])
    if (req.signedCookies['connect.sid'] === req.session.id) {
         return User.findById(req.session.user)
                 .lean()
                 .then(user => res.render('success', { user }))
                 .catch(err => console.log(err))
    } else {
         return res.redirect('/login')
    }
 })

module.exports = router