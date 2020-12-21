const express = require('express')
const exhbs = require('express-handlebars')
const bodyParser = require('body-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const cookieParser = require('cookie-parser')

const routes = require('./routes/index')
require('./config/mongoose')

const app = express()
const port = 3000

app.engine('hbs', exhbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
//Create a uninitialized session when there is a request
app.use(session({
    store: new MongoStore({ url: 'mongodb://localhost/log-in' }),
    secret: 'authorizedUser',
    resave: false, //There is touch()
    saveUninitialized: false,
    cookie: {
        domain: `localhost`,
    }
}))

app.use(cookieParser('authorizedUser'))

app.use(routes)

app.listen(port, () => {
    console.log(`This server is listening to http://localhost:${port}`)
})

