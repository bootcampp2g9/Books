const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./routes/books');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/books', booksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});