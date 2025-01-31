const router = require('express').Router();// require express and create router
const apiRoutes = require('./api'); //
const homeRoutes = require('./homeRoutes');

router.use('/',homeRoutes);//
router.use('/api',apiRoutes);//reuqests made to /api route will be routed to index.js 

module.exports = router;