const express = require('express')
const route = express.Router()
const equipController = require('../controller/equipController')
const equipKmController = require('../controller/equipKmController')
const storage = require('../multer/storage')
const multer = require('multer')
const uploadFile = multer({storage})


route.get('/', equipController.findAll)
route.get('/findData', equipController.searchData)
route.get('/readFile', equipKmController.readFile)
route.post('/addItem', equipController.addItem)
route.post('/upload', uploadFile.single('file'), equipKmController.uploadFile)
route.put('/update/:id', equipController.updateItem)
route.delete('/delete/:id', equipController.deleteItem)




module.exports = route