const router = require('express').Router()
const tipsRoutes = require('./tips')
const feedbackRoutes = require('./feedback')

router.use('/tips', tipsRoutes)
router.use('/feedback', feedbackRoutes)

module.exports = router