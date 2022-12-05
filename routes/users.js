const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('home.ejs')
})

router.get('/about-us', (req, res) => {
	res.render('about-us.ejs')
})

router.get('/blog', (req, res) => {
	res.render('blog.ejs')
})

router.get('/contact-us', (req, res) => {
	res.render('contacts.ejs')
})

router.get('/schedule', (req, res) => {
	res.render('schedule.ejs')
})

router.get('/speakers', (req, res) => {
	res.render('speakers.ejs')
})


module.exports = router