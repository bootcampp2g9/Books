const router = require('express').Router();
const { Book, User } = require('../models'); // Import the book and user models from the models directory
const withAuth = require('../utils/auth'); // Import the withAuth middleware to protect routes

// Route to handle GET requests for the homepage
router.get('/', async (req, res) => {
  try {
    // Get all books and JOIN with user data
    const projectData = await Book.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const projects = projectData.map((project) => Book.get({ plain: true }));

    // Pass serialized data and session flag into template
    // Pass logged_in status from session,
    //  If there's an error, respond with a 500 status and the error message
    res.render('homepage', { 
      projects, 
      logged_in: req.session.logged_in 
    });                         
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to handle GET requests for a specific book by its ID 
router.get('/Book/:id', async (req, res) => {
  try {
    const projectData = await Book.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
// Route to handle GET requests for the profile page, using withAuth middleware, include the users books
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to handle GET requests for the login page
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
