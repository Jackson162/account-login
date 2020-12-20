const express = require('express')
const exhbs = require('express-handlebars')
const bodyParser = require('body-parser')
const User = require('./models/user')
require('./config/mongoose')

const app = express()
const port = 3000

app.engine('hbs', exhbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

let personLogin = undefined
console.log('reassign personLogin')

app.get('/login', (req, res) => {
    if (!personLogin) {
        res.render('login')
    } else {
        res.redirect('/')
    }
})

app.post('/login', (req, res) => {
    const logIn = req.body
    User.find()
        .lean()
        .then(users => {
            personLogin = users.find(user => logIn.email === user.email && logIn.password === user.password)
            if (personLogin) {
                return res.redirect('/')  
            } else {
                return res.send('User doesn\'t exist.')
            }
        })
        .catch(error => console.log(error))
})

app.get('/', (req, res) => {
    if (personLogin) {
        console.log('no reassign')
        return res.send(`Welcome! ${personLogin.firstName}`)
    } else {
        console.log('user is undeifned')
        return res.redirect('/login')
    }    
})



app.listen(port, () => {
    console.log(`This server is listening to http://localhost:${port}`)
})
