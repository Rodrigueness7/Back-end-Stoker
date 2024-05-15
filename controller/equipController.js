const Equipament = require('../model/equipament')


const addItem = async (req, res) => {
    try {
        let equipament = new Equipament(req.body)
        equipament.insertData(equipament)
        res.json({data:'Added successfully'})
    } catch (error) {
         res.end(error)
    }
}

const findAll = async(req, res) => {
    try {
      await Equipament.selectData(res)
    } catch (error) {
        await res.send(error)
    }
}

const deleteItem = async(req, res) => {
    try {
        let id = req.params.id
       await Equipament.deleteData(id)
        res.send({data: 'Delete'})
    } catch (error) {
        await res.send(error)
    }
}

const updateItem = async(req, res) => {
    try {
        let id = req.params.id
        let equipament = new Equipament(req.body)
       await equipament.updateData(equipament, id)
        res.send({data: 'Updating'})
    } catch (error) {
        await res.send(error)
    }
}

const searchData = async(req, res) => {
    try {
        await Equipament.findData(req.body, res)
    } catch (error) {
        res.send(error)
    }
}
module.exports = {addItem, findAll, deleteItem, updateItem, searchData}