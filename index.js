const express = require('express')
const app = express()
const path = require('path')
const port = 3000

const userRoutes = require('./routes/users');


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.set('layout', './layouts/landing-pages-layout')

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', userRoutes)


app.listen(port, () => {
	console.log(`Listening on port ${3000}`)
})