const express = require("express")
const nodemon = require("nodemon")
const app = express()
const port = 8000
const fs = require("fs")

// needed since req is an object!
var bodyParser = require('body-parser')

app.use(bodyParser.json() )
app.use(express.json());  

app.post("/spellinglist", function (req, res) {
    const list = req.body.spellingList
    console.log(list, 'object')
    // console.log(req)

    // fs.readFile('./words.txt', 'utf-8', function(err, data) {
    //     if (err) throw err

    //     let spellingArray = JSON.parse(data)

    // fs.writeFile('./messages.txt', JSON.stringify(spellingArray), 'utf-8',
    // function(err) {
    //     if (err) throw err
    //     console.log('Done')
    //     })
    // })
})






app.listen(port, () => {
    console.log(`app is listening on host ${port}`)
})


