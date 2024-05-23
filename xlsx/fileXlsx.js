const XLSX = require('xlsx')
const fs = require('fs')

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

const deleteXlsx = () => {

    if(namefile.length == 0) {
        throw 'There is not exist file for delete'
    }
    
   fs.unlink(`./uploads/${namefile[namefile.length - 1]}`, (error) => {
    if(error) {
        console.error(`error removing file:${error}`)
    }
    return namefile.pop()
})

}

module.exports = { xlsxFile, DataFile, deleteXlsx }