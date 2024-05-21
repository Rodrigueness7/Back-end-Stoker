const xlData = require('../model/equipamentKm')

const uploadFile = async (req, res) => {
  try {
     xlData.DataFile(req.file.filename)
    await res.json({data: 'Upload File'})
  } catch (error) {
    await res.send(error)
  }
}
    

const readFile = async (req, res) => {
    try {
     res.send(xlData.xlsxFile())
      
    } catch (error) {
       await res.send(error)
    }
}

const deleteFile = async (req, res) => {
  try {
    xlData.deleteXlsx()
    await res.send('Delete')
  } catch (error) {
    res.send(error)
  }
}
    

module.exports = {uploadFile, readFile, deleteFile}