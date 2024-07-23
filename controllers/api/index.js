const router = require('express').Router();// require express and create router
const userRoutes = require('./bookRoutes');//import route handler
const projectRoutes = require('./projectRoutes');//import route handler
const apiRoutes = require('./api');
router.use('/users', userRoutes);//requests starting with users will be routed to userRoutes
router.use('/projects', projectRoutes);//requests starting with projects will be router to projectRoutes
router.use('/api',apiRoutes);//reuqests made to /api route will be routed to index.js 
module.exports = router;
