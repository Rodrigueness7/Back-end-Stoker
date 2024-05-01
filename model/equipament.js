class Equipament {

  id;
  description;
  type;
  number;
  value;

  constructor(data) {
    this.Id = data.id;
    this.Description = data.description;

  }

  get Id() {
    return this.id;
  }

  set Id(value) {

    try {
      if (value === undefined) {
        return this.id = 0;
      }

      return this.id = value;

    } catch (error) {

      console.log(error.message) 
    }
  }

  get Description() {
    return this.description;
  }

  set Description(value) {
    try {

      if (value === undefined) {
        throw new Error('description invalid');

      }

      return this.description = value;

    } catch (error) {

       console.log(error.message);
    }

  }

  findId() {
    console.log(this.Description)
  }

}

module.exports = Equipament