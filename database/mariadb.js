require('dotenv').config()
const mariadb = require('mariadb')

const pool = mariadb.createPool({
    host: process.env.host,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password,
    connectionLimit: 5
})

const createStock = () => {
    pool.getConnection().then(
        conn => {
            conn.query('CREATE TABLE (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,                                                                  decription VARCHAR(50), type VARCHAR(50),number INT NOT NULL, value DECIMAL(13,2) NOT NULL)')
        }
    ).then(
        conn.end()
    )
}

createStock()