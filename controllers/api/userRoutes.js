const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const path = require('path');

// In-memory user store (replace with a real database in production)
const users = new Map();

// Route to serve signup page
router.get('/signup', (req, res) => {
    res.render('signup');
});

// Route to serve login page
router.get('/login', (req, res) => {
    res.render('login');
});

// Route for handling login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Please fill out both fields.' });
    }

    const user = Array.from(users.values()).find(user => user.username === username || user.email === username);

    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid username or password.' });
    }

    // In a real app, generate a token and send it to the client
    res.status(200).json({ message: 'Login successful' });
});

// Route for handling signup
router.post('/signup', async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
        return res.status(400).json({ message: 'Please fill out all fields.' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match.' });
    }

    const existingUser = Array.from(users.values()).find(user => user.username === username || user.email === email);

    if (existingUser) {
        return res.status(409).json({ message: 'Username or email already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = uuid.v4();

    const newUser = {
        id: userId,
        username,
        email,
        password: hashedPassword
    };

    users.set(userId, newUser);

    // In a real app, generate a token and send it to the client
    res.status(201).json({ message: 'User registered successfully' });
});

module.exports = router;
