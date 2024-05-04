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


module.exports = {addItem, findAll}