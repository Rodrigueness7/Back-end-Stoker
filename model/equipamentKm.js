class EquipamentKm {
    ['Nº K&M'];
    Proposta;
    ['Descrição'];
    ['Início'];
    Fim
    Entrada
    ['Saída']
    Valor

    constructor(data) {
        this.cod_Prod = data['Nº K&M']
        this._proposal = data.Proposta
        this._description = data['Descrição'] 
        this.dt_Init = data['Início']
        this.dt_Finish = data.Fim
        this.dt_Entry = data.Entrada
        this.dt_Departure = data['Saída']
        this._value = data.Valor

        

    }

    get cod_Prod() {
        return this['Nº K&M']
    }

    set cod_Prod(value) {
        if(value === undefined) {
            throw 'Invalid Nº K&M'

        } 
        return this['Nº K&M'] = value
        
    }

    get _proposal() {
        return this.Proposta
    }

    set _proposal(value) {
        if(value === undefined) {
            throw 'invalid proposal'
        }
        return this.Proposta = value
    }

    get _description() {
        return this['Descrição']
    }

    set _description(value) {
        if(value === undefined) {
            throw 'invalid description'
        }
        return this['Descrição'] = value
    }

    get dt_Init() {
        return this['Início']
    }

    set dt_Init(value) {
        if(value === '') {
            return this['Início'] = null
        }
        return this['Início'] = new Date(value).toLocaleDateString('pt-br').split('/').reverse().join('-')
    }

    get dt_Finish() {
        return this.Fim
    }

    set dt_Finish(value) {
        if(value === ' ') {
            return this.Fim = null
        }
        return this.Fim = new Date(value).toLocaleDateString('pt-br').split('/').reverse().join('-')
    }


    get dt_Entry() {
        return this.Entrada
    }

    set dt_Entry(value) {
        if(value === '') {
            return this.Entrada = null
        }
        return this.Entrada = new Date(value).toLocaleDateString('pt-br').split('/').reverse().join('-')
    }

    get dt_Departure() {
        return this['Saída']
    }

    set dt_Departure(value) {
        if(value === '') {
            return this['Saída'] = null
        }
        return this['Saída'] = new Date(value).toLocaleDateString('pt-br').split('/').reverse().join('-')
    }

    get _value() {
        return this.Valor
    }

    set _value(value) {
        if(value === undefined) {
            throw 'Invalid value'
        }
        return this.Valor = value
    }

    insert(data) {
      console.log(data)
    }

}

module.exports = EquipamentKm