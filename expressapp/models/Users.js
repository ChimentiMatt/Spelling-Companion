const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10

const userSchema = mongoose.Schema({
    usernameSchema: {type: String, required: [true, "Username is required"]},
    passwordSchema: {type: String, required: [true, "Password is required"]},
    email: {type: String, required: [true, "Email is required"]}
})

userSchema.pre('save', function(next) {
    this.passwordSchema = bcrypt.hasSync(this.passwordSchema, saltRounds)
    next()
})

module.exports = mongoose.model("Users", userShema)