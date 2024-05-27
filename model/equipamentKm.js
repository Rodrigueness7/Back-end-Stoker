class EquipamentKm {
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
        this.proposal = data.proposal
        this.description = data.description
        this.dtInit = data.dtInit
        this.dtFinish = data.dtFinish
        this.dtEntry = data.dtEntry
        this.dtDeperture = data.dtDeperture
        this.value = data.value
    }


    get cod_prod() {
        return this.codProd
    }

    set cod_prod(value) {
        if (value === undefined) {
            throw 'Invalid codProd'
        }
        return this.codProd = value
    }

    get _proposal() {
        return this.proposal
    }

    set _proposal(value) {
        if (value === undefined) {
            return this.proposal = null
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
        if (value === undefined) {
            return this.dtInit = null
        }
        return this.dtInit = value
    }

    get dt_finish() {
        return this.dtFinish
    }

    set dt_finish(value) {
        if (value === undefined) {
            return this.dtFinish = null
        }
        return this.dtFinish = value
    }

    get dt_entry() {
        return this.dtEntry
    }

    set dt_entry(value) {
        if (value === undefined) {
            return this.dtEntry = null
        }
        return this.dtEntry = value
    }

    get dt_deperture() {
        return this.dtDeperture
    }

    set dt_deperture(value) {
        if (value === undefined) {
            return this.dtDeperture = null
        }
        return this.dt_deperture = value
    }

    get _value() {
        return this.value
    }

    set _value(value) {
        if (value === undefined) {
            return this.value = null
        }
        return this.value = value
    }


    insert(data) {
        console.log(data)
    }
}

module.exports = EquipamentKm