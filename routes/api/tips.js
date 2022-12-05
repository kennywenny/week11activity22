const router = require('express').Router()
const { readFromFile } = require('../../helpers/fsUtils');

// GET Route for retrieving all the tips
router.get('/', (req, res) => {
  console.info(`${req.method} request received for tips`);
  readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
});

module.exports = router