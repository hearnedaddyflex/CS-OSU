const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')
const classRouter = require('./routes/classes')
const soloOrGroupRouter = require('./routes/groupOrSolo')


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.use('/', indexRouter)
app.use('/classes', classRouter)
app.use('/groupOrSolo', soloOrGroupRouter)



app.listen(process.env.PORT || 3000)