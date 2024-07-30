const express = require('express');
const router = require('express').Router(); //updated to require express router
const { Book } = require('../../models/')

// GET all books, added async await
router.get('/', async (req, res) => {
 const books = await (Book.findAll());
 res.json(books);
});

// // GET books by genre, added async await
// router.get('/:genre', async (req , res) => {
// //  const books = await Book.findAll({bookGenre : genre});
//   res.json(books);
// });

// GET a single book, added async await
// Search by book Title rather than ID, or per Quentin, lets try the findOne method. Go over findByPk with tutor. Discuss both options
router.get('/:id', async (req, res) => {
  const book = await Book.findByPk(parseInt(req.params.id));
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

//Add async any variable can now be 'awaited' (waiting for something to come back)
// We will be awaiting out user model here 
router.get("test/:id", async (req, res) => {
  try {
  const book = await Book.findByPk(parseInt(req.params.id)); 
  res.status(200).json(book) 
  } catch (err) {
  console.error(err)
  res.status(500).json(err)  
  }
})

// POST a new book, added async await
router.post('/', async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json(book);
});

// Update a book, added async await
router.put('/:id', async (req, res) => {
  const updatedBook = await Book.update(parseInt(req.params.id), req.body);
  if (updatedBook) {
    res.json(updatedBook);
  } else {
    res.status(404).json({ message: 'Book checked out' });
  }
});

// DELETE a book, added async await
router.delete('/:id', async (req, res) => {
  await Book.delete(parseInt(req.params.id));
  res.status(204).end();
});

module.exports = router;