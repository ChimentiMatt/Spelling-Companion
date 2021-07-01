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
    let spellingArray = []


    fs.readFile('./words.txt', function(err, data) {
        if (err) throw err
        console.log(data, 'read data')
        spellingArray = JSON.parse(data)
        console.log(spellingArray.dictionary, "dictionary from file")
        spellingArray.dictionary.push(list)
        console.log(spellingArray.dictionary, 'spell array')

        fs.writeFile('./words.txt', JSON.stringify({dictionary: spellingArray.dictionary}),
        function(err) {
            if (err) throw err
            console.log('Done')

        })
    })
})


// { dictionary: []}



app.listen(port, () => {
    console.log(`app is listening on host ${port}`)
})


