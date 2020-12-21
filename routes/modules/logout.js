const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.get('/', (req, res) => {
    return req.session.destroy(err => {
                if (err) console.log(err)
                res.redirect('/login')
            })
})

module.exports = router