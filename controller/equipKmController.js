const xlData = require('../xlsx/fileXlsx')

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
       xlData.xlsxFile().map((item =>{
       console.log(item)
      }))
     res.send('Feito')
      
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