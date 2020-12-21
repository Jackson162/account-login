const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.get('/', (req, res) => {
    if (req.get('cookie').includes(req.session.id)) {
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
            console.log(validUser)
            if (validUser) {
                req.session.user = validUser._id
                return res.redirect('/')
            } else {
                return res.send('User not found or wrong password')
            }
        })
        .catch(err => console.log(err))
})

module.exports = router