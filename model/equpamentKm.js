class EquipamentKm {
    codProd;
    descricao;
    dtInit;
    dtEntry;
    dtDeparture;
    value

    constructor(data) {
        this.cod_Prod = data.codProd
        this._descricao = data.descricao
        this.dt_Init = data.dtInit
        this.dt_Entry = data.dtEntry
        this.dt_Departure = data.dtDeparture
        this._value = data.value
    }

    get cod_Prod() {
        return this.codProd
    }

    set cod_Prod(value) {
        if(value === undefined) {
            throw 'Invalid CodProd'

        } else if(typeof item['__EMPTY_3'] !== 'string' && item['__EMPTY_3'] !== undefined) {
            return this.codProd = value
        }
        
    }

    get _descricao() {
        return this.descricao
    }

    set _descricao(value) {
        if(value === undefined) {
            throw 'invalid descrição'
        }
        return this.descricao = value
    }

    get dt_Init() {
        return this.dtInit
    }

    set dt_Init(value) {
        if(value === undefined) {
            return this.dtInit = null
        }
        return this.dtInit = value
    }

    get dt_Entry() {
        return this.dtEntry
    }

    set dt_Entry(value) {
        if(value === undefined) {
            return this.dt_Entry = null
        }
        return this.dtEntry = value
    }

    get dt_Departure() {
        return this.dtDeparture
    }

    set dt_Departure(value) {
        if(value === undefined) {
            return this.dtDeparture = null
        }
    }

    get _value() {
        return this.value
    }

    set _value(value) {
        if(value === undefined) {
            throw 'Invalid value'
        }
        return this.value = value
    }

}
