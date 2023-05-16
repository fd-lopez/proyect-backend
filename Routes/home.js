const express = require('express')
const router = express.Router()

const homeController = require('../Controllers/homeController')
const checks = require('../Middleware/checks')
const {validateChecks} = require('../Middleware/validateChecks')

router.get('/read', homeController.read)
router.post('/create', checks, validateChecks, homeController.create)

module.exports=router