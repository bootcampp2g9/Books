const express = require('express');
const axios = require('axios');

const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Inform Express.js on which template engine to use
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);

// Function to fetch book details by title
async function fetchBookDetails(title) {
  try {
    const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`;
    const response = await axios.get(url);
    return response.data.docs; // Return the array of books
  } catch (error) {
    console.error('Error fetching book details:', error);
    throw new Error('Error fetching book details');
  }
}


// API endpoint to fetch book details by ISBN
app.get('/api/book/:title', async (req, res) => {
  const title = req.params.title;
  try {
    const bookDetails = await fetchBookDetails(title);

    if (bookDetails && bookDetails.length > 0) {
      // Return the first book in the results
      res.json(bookDetails[0]);
    } else {
      res.status(404).json({ message: 'Book not found.' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


app.get('/', async(req, res) => {
  res.render('login');
});
// const homeRouter = require('./controllers/homeRoutes');
// app.use('/', homeRouter)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});