const EquipamentRented = require('../model/equipamentRented')
const xlData = require('../xlsx/fileXlsx')

const uploadFile = async (req, res) => {
  try {
    xlData.DataFile(req.file.filename)
    await res.json({ data: 'Upload File' })
  } catch (error) {
    await res.send(error)
  }
}

const readFile = async (req, res) => {
  try {
    let xlsx = xlData.xlsxFile(req)
    xlsx.map(itens => {
      let equipamentRented = new EquipamentRented(itens)
      equipamentRented.insert(equipamentRented)
    })
    res.send('Feito')

  } catch (error) {
    await res.send(error.message)
  }
}

const deleteFile = async (req, res) => {
  try {
    xlData.deleteXlsx()
    await res.send('Delete')
  } catch (error) {
    res.send(error.message)
  }
}


module.exports = { uploadFile, readFile, deleteFile }