const db = require('../database/mariadb')

class Equipament {

  id;
  description;
  type;
  number;
  value;
  locale;
  user

  #table = 'equipament'

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

    return this.id
  }

  set Id(value) {

    if (value === undefined) {
      return this.id = 0
    }
    return this.id = value
  }


  get Description() {

    return this.description
  }

  set Description(value) {

    if (value === undefined) {
      throw 'invalid description'
    }
    return this.description = value
  }


  get Type() {

    return this.type
  }

  set Type(value) {

    if (value === undefined) {
      throw 'invalid type'
    }
    return this.type = value
  }

  get Number() {

    return this.number
  }

  set Number(value) {

    if (value === undefined) {
      throw 'invalid number'
    }
    return this.number = value
  }

  get Value() {

    return this.value
  }

  set Value(value) {

    if (value === undefined) {
      throw 'invalid value'
    }
    return this.value = value
  }

  get Locale() {

    return this.locale
  }

  set Locale(value) {

    if (value === undefined) {
      throw 'invalid locale'
    }
    return this.locale = value
  }

  get User() {

    return this.user
  }

  set User(value) {

    if (value === undefined) {
      throw 'invalid user'
    }
    return this.user = value
  }


  async insertData(data) {
    await db.insert(this.#table, data)

  }

  static async selectData(res) {
    await db.select('equipament', async (rows) => {
      await res.send(rows)
    })
  }

  static async deleteData(id) {
    await db.remove('equipament', id)
  }

  async updateData(data, id) {
    await db.update(this.#table, data, id)
  }

  static async findData(data, res) {
    await db.selectData('equipament', data, async (rows) => {
      await res.send(rows)
    })
  }


}


module.exports = Equipament