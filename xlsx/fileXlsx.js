const XLSX = require('xlsx')
const fs = require('fs')

let namefile = []

const DataFile = (data) => {
    namefile.push(data)
   
}

const xlsxFile = (cell1, cell2) => {

    if(namefile.length === 0) {
        throw 'there is no file'
    }
    
    const workbook = XLSX.readFile(`./uploads/${namefile[namefile.length-1]}`, {sheetStubs:false})
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    let cells = XLSX.utils.sheet_to_json(worksheet, {
        raw: true,
        range: `${cell1}:${cell2}`,
        defval: null,
    })
 
     return cells
         
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