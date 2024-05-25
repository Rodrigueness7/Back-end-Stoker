require('dotenv').config()
const mariadb = require('mariadb')

const pool = mariadb.createPool({
    host: process.env.host,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password,
    connectionLimit: 5
})

const insert = async (table, data) => {

    let keys = '?,'.repeat(Object.keys(data).length).slice(0, -1)

    await pool.getConnection().then(
        async conn => {
            await conn.query(`INSERT INTO ${table} VALUE (${keys})`, Object.values(data)).then(
                await conn.end()
            )
        }
    )
}

const select = async (table, result) => {

    await pool.getConnection().then(
        async conn => {
            await conn.query(`SELECT * FROM ${table}`).then(
                result
            ).then(
                await conn.end()
            )
        }
    )
}

const remove = async (table, condition) => {
    await pool.getConnection().then(
        async conn => {
            await conn.query(`DELETE FROM ${table} WHERE id = ${condition}`).then(
                await conn.end()
            )
        }
    )
}

const update = async (table, data, condition) => {
    let key = Object.keys(data).join(' = ?, ').concat(' = ? ')

    await pool.getConnection().then(
        async conn => {
            await conn.query(`UPDATE ${table} SET ${key} WHERE id = ${condition}`, Object.values(data)).then(
                await conn.end()
            )
        }
    )

}

const selectData = async (table, data, result) => {
    let keys = Object.keys(data).join(' = ? OR ').concat(' = ? ')

    await pool.getConnection().then(
        async conn => {
            await conn.query(`SELECT * FROM ${table} WHERE ${keys}`, Object.values(data)).then(
                result
            ).then(
                await conn.end()
            )
        }
    )
}

module.exports = { insert, select, remove, update, selectData }