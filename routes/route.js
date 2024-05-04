const express = require('express')
const route = express.Router()
const equipController = require('../controller/equipController')

route.get('/', equipController.findAll)
route.post('/addItem', equipController.addItem)



module.exports = route