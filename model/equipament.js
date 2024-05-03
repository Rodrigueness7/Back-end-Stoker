class Equipament {

  id;
  description;
  type;
  number;
  value;
  locale; 
  user

  constructor(data) {
    this.Id = data.id;
    this.Description = data.description;
    this.Type = data.type;
    this.Number = data.number;
    this.Value = data.value;
    this.Locale = data.locale;
    this.User = data.user
  
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

       console.log(error.message)
    }

  }

  get Type() {

    return this.type;

  }

  set Type(value) {
    try {
          
    if(value == undefined) {
      throw new Error ('invalid type')
    }

    return this.type = value;
      
    } catch (error) {
      
      console.log(error.message)
    }
  }


  get Number() {

    return this.number;

  }

  set Number(value) {

    try {
      if(value === undefined) {
        throw new Error('Invalid number')
      }
      return this.number = value;

    } catch (error) {

      console.log(error.message)
    }

  }

  get Value() {

    return this.value;

  }

  set Value(value) {
    try {
      if(value === undefined) {
        throw new Error ('Invalid value')
      }

      return this.value = value;

    } catch (error) {
      
      console.log(error.message)
    }
  }

  get Locale() {
    return this.locale;

  }

  set Locale(value) {
    try {
      if(value === undefined) {
        throw new Error('Invalid locale')
      }

      return this.locale = value;

    } catch (error) {
      
      console.log(error.message)

    }
  }

  get User() {

    return this.user;

  } 

  set User(value) {
    try {
      if(value === undefined) {
        throw new Error ('Invalid user')
      }
      return this.user = value;

    } catch (error) {
      console.log(error.message)
    }
  }


  findId(res) {
    res.end(this.Description + " " + this.Type)

  }

}

module.exports = Equipament