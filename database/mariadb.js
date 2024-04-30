require('dotenv').config()
const mariadb = require('mariadb')

const pool = mariadb.createPool({
    host: process.env.host,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password,
    connectionLimit: 5
})

const insert = () => {
    pool.getConnection().then(
        conn => {
            conn.query()
        }
    ).then(
        conn.end()
    )
}

module.exports = {insert}