const express = require('express')
const exhbs = require('express-handlebars')
const User = require('./models/user')
require('./config/mongoose')

const app = express()
const port = 3000

app.engine('hbs', exhbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')



app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`This server is listening to http://localhost:${port}`)
})
