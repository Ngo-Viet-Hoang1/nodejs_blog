const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express()
const methodOverride = require('method-override')
const port = 3000

const route = require('./routes')
const db = require('./config/db')

db.connect()

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
    extended: true,
    helpers: {
        sum: (a, b) => a + b,
    }
}))
app.use(express.json())

app.use(methodOverride('_method'))

app.use(morgan('combined'))

// Template engine
app.engine('hbs', engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

route(app)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port} on port ${port}`))
