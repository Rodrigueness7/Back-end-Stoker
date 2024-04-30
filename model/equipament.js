class Equipament {

    id;
    description;
    type;
    number;
    value;

    constructor(data) {
        this.setId(data.id);
     
    }

    getId() {
        return this.id
    }

    setId(value){
      try {
        if(value === undefined){
            throw new Error('Id invalid')
       }
        return this.id = value
      } catch (error) {

        return error
      }

    }

    findId() {
        console.log(this.id) 
    }

}

module.exports = Equipament