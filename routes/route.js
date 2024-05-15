const express = require('express')
const route = express.Router()
const equipController = require('../controller/equipController')

route.get('/', equipController.findAll)
route.get('/findData', equipController.searchData)
route.post('/addItem', equipController.addItem)
route.put('/update/:id', equipController.updateItem)
route.delete('/delete/:id', equipController.deleteItem)




module.exports = route