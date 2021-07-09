const userModel = require('../models/Users.js')

module.exports = {
    getById: function (req, res, next) {
        userModel.findById(req.params.users, function(err, cardInfo) {
            if (err) {
                next(err)
            } else {
                res.json({status:'success', message: 'card found', data: {users: user}})
            }
        })
    }
}