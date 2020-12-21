const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.get('/', (req, res) => {
    if (req.get('cookie').includes(req.session.id)) {
         return User.findById(req.session.user)
                 .lean()
                 .then(user => res.render('success', { user }))
                 .catch(err => console.log(err))
    } else {
         return res.redirect('/login')
    }
 })

module.exports = router