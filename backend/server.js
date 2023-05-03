const express = require('express')
const app = express()

let database = require("./testdata.json")


app.get('/', (req, res) => {
    res.status(200).json({database})
})

app.get('/:id', (req, res) => {
    res.status(200).json(database.id)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Running in port ${PORT}`);
})