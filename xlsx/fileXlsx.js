const XLSX = require('xlsx')
const fs = require('fs')

let namefile = []

const DataFile = (data) => {
    namefile.push(data)

}

const xlsxFile = (req) => {

    let cell1 = req.body.cell1
    let cell2 = req.body.cell2

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
        let cod = req.body.cod !== undefined ? req.body.cod : 'Nº K&M'
        let prop = req.body.prop !== undefined ? req.body.prop : 'Proposta'
        let desc = req.body.desc !== undefined ? req.body.desc : 'Descrição'
        let init = req.body.init !== undefined ? req.body.init : 'Início'
        let finsh = req.body.finsh !== undefined ? req.body.finsh : 'Fim'
        let entry = req.body.entry !== undefined ? req.body.entry : 'Entrada'
        let deper = req.body.deper !== undefined ? req.body.deper : 'Saída'
        let value = req.body.value !== undefined ? req.body.value : 'Valor'


        delete Object.assign(data, { ['codProd']: data[`${cod}`] })[`${cod}`]
        delete Object.assign(data, { ['proposal']: data[`${prop}`] })[`${prop}`]
        delete Object.assign(data, { ['description']: data[`${desc}`] })[`${desc}`]
        delete Object.assign(data, { ['dtInit']: data[`${init}`] })[`${init}`]
        delete Object.assign(data, { ['dtFinish']: data[`${finsh}`] })[`${finsh}`]
        delete Object.assign(data, { ['dtEntry']: data[`${entry}`] })[`${entry}`]
        delete Object.assign(data, { ['dtDeperture']: data[`${deper}`] })[`${deper}`]
        delete Object.assign(data, { ['value']: data[`${value}`] })[`${value}`]

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