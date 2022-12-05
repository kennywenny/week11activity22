const router = require('express').Router()
const tipsRoutes = require('./tips')

router.use('/tips', tipsRoutes)

module.exports = router