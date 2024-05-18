const XLSX = require('xlsx')

let namefile = []

const DataFile = (data) => {
    namefile.push(data)
   
}

const xlsxFile = () => {
    const workbook = XLSX.readFile(`./uploads/${namefile[namefile.length-1]}`)
    const sheet_name_list = workbook.SheetNames
    const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
 
    return xlData
}

module.exports = { xlsxFile, DataFile }