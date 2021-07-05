const express = require('express')
const router = express.Router()
const uuid = require('uuid')
let users = require('../../Users')

//get all users
router.get('/', (req, res) => {
    res.json(users)
})

router.post('/', (req, res) => {
    const newUser = {
        id: uuid.v4,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }
    if(!newUser.username || !newUser.email){
        return res.sendStatus(400)
    }

    users.push(newUser)
    res.json(users)
})