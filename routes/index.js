const router = require('express').Router()
const path = require('path')
const apiRoutes = require('./api')
const { readFromFile } = require('../helpers/fsUtils');

router.use('/api', apiRoutes)

// GET Route for homepage
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/../public/index.html'))
);

// GET Route for feedback page
router.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/../public/pages/feedback.html'))
);

// GET Route for retrieving all the tips
router.get('/api/tips', (req, res) => {
  console.info(`${req.method} request received for tips`);
  readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
});

module.exports = router