const express = require('express')
const router = express.Router()

const homeController = require('../Controllers/homeController')
const checks = require('../Middleware/checks')
const {validateChecks} = require('../Middleware/validateChecks')
const {validateId} = require('../Middleware/validateId')

router.get('/read', homeController.read)
router.get('/axios', homeController.axGet)
router.post('/create', checks, validateChecks, homeController.create)
router.put('/edit/:id', validateId, checks, validateChecks, homeController.edit)
router.delete('/delete/:id', validateId, checks, validateChecks, homeController.delete)

module.exports=router