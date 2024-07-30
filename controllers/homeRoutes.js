const router = require("express").Router()

// First route to get hit by express, '/' is always first route
router.get('/', (req, res ) => {
    res.render('homepage')
})

router.get('/login', ( req, res ) => {
    res.render('login');
  })

router.get('/profile', ( req, res ) => {
    res.render('profile');
})

// res.render is going to look in views dir and render anything named inbetween quotes
module.exports = router