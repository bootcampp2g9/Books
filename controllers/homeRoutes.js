const router = require("express").Router()

// First route to get hit by express, '/' is always first route
router.get('/', (req, res ) => {
    res.render('homepage')
})
router.get('/login', function(req,res){
    res.render('login');
  })

// res.render is going to look in views dir and render anything named inbetween quotes
module.exports = router