const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const store = require('../../app')

router.get('/', (req, res) => {
    if (req.signedCookies['connect.sid'] === req.session.id) {
        return res.redirect('/')
   } else {
       return res.render('login')
   }
})

router.post('/', (req, res) => {
    const logIn = req.body
    return User.find()
        .lean()
        .then(users => {
            const validUser = users.find(user => 
                logIn.email === user.email && logIn.password === user.password
            )
            console.log(123)
            if (validUser) {
                req.session.user = validUser._id
                console.log('sid from last cookie: ', req.signedCookies['connect.sid'])
                console.log(req.session.id)
                console.log(req.sessionID)
                return res.redirect('/')
            } else {
                return res.send('User not found or wrong password')
            }
        })
        .catch(err => console.log(err))
})

module.exports = router