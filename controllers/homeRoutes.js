const router = require("express").Router()
const {Book} = require('../models');

// First route to get hit by express, '/' is always first route
router.get('/', async (req, res ) => {
//  res.render("homepage")

  // try{

    const bookdata = await Book.findAll({
      
    });
    console.log(bookdata);
   const books = bookdata.map((bookdata) => bookdata.get({plain:true}));
  
  res.render('homepage',{
    books,
  });
  //  }catch (err){
  //   res.status(500).json(err);
  //  }
})
router.get('/login', function(req,res){
    res.render('login');
  })

// res.render is going to look in views dir and render anything named inbetween quotes
module.exports = router