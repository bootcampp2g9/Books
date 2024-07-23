const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// GET all books
router.get('/', (req, res) => {
  res.json(Book.findAll());
});

// GET a single book
// Geri, Search by book Title rather than ID, or per Quentin, lets try the findOne method
router.get('/:id', (req, res) => {
  const book = Book.findById(parseInt(req.params.id));
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// POST a new book
router.post('/', (req, res) => {
  const book = Book.create(req.body);
  res.status(201).json(book);
});

// Update a book
router.put('/:id', (req, res) => {
  const updatedBook = Book.update(parseInt(req.params.id), req.body);
  if (updatedBook) {
    res.json(updatedBook);
  } else {
    res.status(404).json({ message: 'Book checked out' });
  }
});

// DELETE a book
router.delete('/:id', (req, res) => {
  Book.delete(parseInt(req.params.id));
  res.status(204).end();
});

module.exports = router;