const XLSX = require('xlsx')
const fs = require('fs')

let namefile = []

const DataFile = (data) => {
    namefile.push(data)

}

const xlsxFile = (cell1, cell2) => {

    if (namefile.length === 0) {
        throw 'there is no file'
    }

    const workbook = XLSX.readFile(`./uploads/${namefile[namefile.length - 1]}`, { sheetStubs: false })
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    let cells = XLSX.utils.sheet_to_json(worksheet, {
        raw: true,
        range: `${cell1}:${cell2}`,
        defval: null,
    })
    let newCells = []
     cells.map((data) => {
        delete Object.assign(data, {['codProd']: data['Nº K&M']})['Nº K&M']
        delete Object.assign(data, {['proposal']: data['Proposta']})['Proposta']
        delete Object.assign(data, {['description']: data['Descrição']})['Descrição']
        delete Object.assign(data, {['dtInit']: data['Início']})['Início']
        delete Object.assign(data, {['dtFinish']: data['Fim']})['Fim']
        delete Object.assign(data, {['dtEntry']: data['Entrada']})['Entrada']
        delete Object.assign(data, {['dtDeperture']: data['Saída']})['Saída']
        delete Object.assign(data, {['value']: data['Valor']})['Valor']

        return newCells.push(data)
     })

     return newCells
}

const deleteXlsx = () => {

    if (namefile.length == 0) {
        throw 'There is not exist file for delete'
    }

    fs.unlink(`./uploads/${namefile[namefile.length - 1]}`, (error) => {
        if (error) {
            console.error(`error removing file:${error}`)
        }
        return namefile.pop()
    })

}

module.exports = { xlsxFile, DataFile, deleteXlsx }