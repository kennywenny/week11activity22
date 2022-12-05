const router = require('express').Router()
const { readFromFile, readAndAppend } = require('../../helpers/fsUtils');

// GET Route for retrieving all the feedback
router.get('/', (req, res) => {
  console.info(`${req.method} request received for feedback`);

  readFromFile('./db/feedback.json').then((data) => res.json(JSON.parse(data)));
});

module.exports = router