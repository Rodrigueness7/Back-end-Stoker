const Equipament = require('../model/equipament')

const findAll = async (req, res) => {
    try {
        let equipament = new Equipament(req.body)
        equipament.findId(res)
    } catch (error) {
        res.end(error)
    }
}


module.exports = {findAll}