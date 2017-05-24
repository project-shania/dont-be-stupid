var mongoose = require('mongoose'),
    config = require('../../../config/config'),
    Utils = require('../../../domain/utils/utils'),
    User = require('../../../domain/models/user').User,
    passport = require('passport'),
    jwt = require('jsonwebtoken');


var signup = (req, res) => {
    var user = new User(req.body);
    user.provider = 'jwt';

    user.save((err) => {
        if (err) {
            res.status(401).send({
                message: Utils.getErrorMessageFromModel(err)
            });
        } else {
            res.status(200).json(user.user_info);
        }
    });
};

module.exports = {
    signup
}