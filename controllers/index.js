const router = require('express').Router();// require express and create router
const apiRoutes = require('./api'); //
const homeRoutes = require('./homeRoutes');
router.use('/api',apiRoutes);//reuqests made to /api route will be routed to index.js 
router.use('/',homeRoutes);//
// This already exists in server.js, redundant
// const app = express();
// // const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());

// // app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// Moved model.exports to bottom for best practice
module.exports = router;