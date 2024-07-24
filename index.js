const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Function to fetch book details by ISBN
async function fetchBookDetails(isbn) {
  try {
    const response = await axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching book details:', error);
    return null;
  }
}

// API endpoint to fetch book details by ISBN
app.get('/api/book/:isbn', async (req, res) => {
  const isbn = req.params.isbn;
  try {
    const bookDetails = await fetchBookDetails(isbn);
    if (bookDetails && `ISBN:${isbn}` in bookDetails) {
      res.json(bookDetails[`ISBN:${isbn}`]);
    } else {
      res.status(404).json({ message: 'Book not found.' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});