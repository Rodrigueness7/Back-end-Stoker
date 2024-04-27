require('dotenv').config('')
const express = require('express')
const app = express()
const PORT = process.env.PORT


app.listen(PORT, (error) => {

    try {
        if(error) {
            throw new Error('Server not is running')
        }
        console.log(`Server is running on port: ${PORT}`)
    } catch (error) {
        console.log(error)
    }
})
