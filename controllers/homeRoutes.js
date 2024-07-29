const router = require("express").Router();
const { Book, User} = require('../models');
const { getAttributes } = require("../models/User");
const withauth = require('../utils/auth');
// First route to get hit by express, '/' is always first route
router.get('/', async (req,res)=>{
  try{

    const bookdata = await Book.findAll({
      
    });
  
   const books = bookdata.map((bookdata) => bookdata.get({plain:true}));
  
  res.render('homepage',{
    books,
    logged_in:req.session.logged_in
  });
   }catch (err){
    res.status(500).json(err);
   }
});
// res.render is going to look in views dir and render anything named inbetween quotes
module.exports = router