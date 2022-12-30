const express = require('express')
const app = express()
app.all('/tesApi', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 5000)
