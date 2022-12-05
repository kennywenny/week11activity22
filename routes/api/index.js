const router = require('express').Router()
const tipsRoutes = require('./tips')

const { readFromFile } = require('../../helpers/fsUtils');

router.use('/tips', tipsRoutes)

module.exports = router