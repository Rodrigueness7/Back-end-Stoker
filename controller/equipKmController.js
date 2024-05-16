

const upload = (req, res) => {
   
    try {
        res.send('upload file')
    } catch (error) {
        res.send(error)
    }
} 
    

module.exports = {upload}