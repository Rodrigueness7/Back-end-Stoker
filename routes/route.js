const express = require('express')
const route = express.Router()
const equipController = require('../controller/equipController')
const equipRentedController = require('../controller/equipRentedController')
const storage = require('../multer/storage')
const multer = require('multer')
const uploadFile = multer({ storage })


route.get('/', equipController.findAll)
route.get('/findData', equipController.searchData)
route.get('/readFile', equipRentedController.readFile)
route.post('/addItem', equipController.addItem)
route.post('/upload', uploadFile.single('file'), equipRentedController.uploadFile)
route.put('/update/:id', equipController.updateItem)
route.delete('/delete/:id', equipController.deleteItem)
route.delete('/deleteFile', equipRentedController.deleteFile)




module.exports = route;