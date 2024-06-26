const db = require('../database/mariadb')

class EquipamentRented{
    codProd;
    proposal;
    description;
    dtInit;
    dtFinish;
    dtEntry;
    dtDeperture;
    value;

    constructor(data) {
        this.cod_prod = data.codProd
        this._proposal = data.proposal
        this._description = data.description
        this.dt_init = data.dtInit
        this.dt_finish = data.dtFinish
        this.dt_entry = data.dtEntry
        this.dt_Deperture = data.dtDeperture
        this._value = data.value

    }


    get cod_prod() {
        return this.codProd
    }

    set cod_prod(value) {
        if (value === undefined) {
            throw 'Invalid id'
        }
        return this.codProd = value
    }

    get _proposal() {
        return this.proposal
    }

    set _proposal(value) {
        if (value === undefined) {
            throw 'Invalid proposal'
        }
        return this.proposal = value
    }

    get _description() {
        return this.description
    }

    set _description(value) {
        if (value === undefined) {
            throw 'Invalid description'
        }
        return this.description = value
    }

    get dt_init() {
        return this.dtInit
    }

    set dt_init(value) {
        if (value == undefined || value == '' || /\s/g.test(value)) {
            return this.dtInit = null
        } else {
            return this.dtInit = new Date(value.split('/').reverse().join('-')).toISOString().split('T')[0]
        }

    }

    get dt_finish() {
        return this.dtFinish
    }

    set dt_finish(value) {
        if (value == undefined || value == '' || /\s/g.test(value)) {
            return this.dtFinish = null
        } else {
            return this.dtFinish = new Date(value.split('/').reverse().join('-')).toISOString().split('T')[0]
        }

    }

    get dt_entry() {
        return this.dtEntry
    }

    set dt_entry(value) {
        if (value == undefined || value == '' || /\s/g.test(value)) {
            return this.dtEntry = null
        } else {
            return this.dtEntry = new Date(value.split('/').reverse().join('-')).toISOString().split('T')[0]
        }
    }

    get dt_Deperture() {
        return this.dtDeperture
    }

    set dt_Deperture(value) {
        if (value == undefined || value == '' || /\s/g.test(value)) {
            return this.dtDeperture = null
        } else {
            return this.dtDeperture = new Date(value.split('/').reverse().join('-')).toISOString().split('T')[0]
        }
    }

    get _value() {
        return this.value
    }

    set _value(value) {
        if (value === undefined) {
            throw 'Invalid value'
        }
        return this.value = value
    }

    insert(data) {
      db.insertTable('equipamentRented', data)
    }
}

module.exports = EquipamentRented;