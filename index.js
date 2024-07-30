const express = require('express');
const axios = require('axios');

const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const routes = require('./controllers')
const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Inform Express.js on which template engine to use
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);

// Function to fetch book details by ISBN
async function fetchBookDetails(isbn) {
  try {
    const response = await axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`);
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

// app.get('/', async(req, res) => {
//   res.render('login');
// });

// const homeRouter = require('./controllers/homeRoutes');
// app.use('/', homeRouter)

app.use(routes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});