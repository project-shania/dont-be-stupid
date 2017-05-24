var mongoose = require('mongoose'),
    config = require('../../../config/config'),
    Utils = require('../../../domain/utils/utils'),
    User = require('../../../domain/models/user').User

var findUserById = (req, res) => {
    User.findOne({
        _id: req.params.id
    }, function (err, user) {
        if (err) {
            res.status(404).send({
                message: Utils.getErrorMessageFromModel(err)
            });
        }

        if (!user) {
            res.status(404).send({
                message: "Usuário não encontrado"
            });
        } else {
            res.status(200).json({
                user: user
            });
        }
    });
}

var updateUser = (req, res) => {
    User.findOneAndUpdate(req.query.id, req.body, { new: true }, function (err, user) {
        if (err) {
            res.status(404).send({
                message: Utils.getErrorMessageFromModel(err)
            });
        }

        if (!user) {
            res.status(404).send({
                message: "Usuário não encontrado"
            });
        } else {
            res.status(201).json({
                user: user,
                message: "Usuário atualizado"
            });
        }
    });
}

var deleteUser = (req, res) => {
    User.findOneAndRemove(req.query.id, function (err, user) {
        if (err) {
            res.status(404).send({
                message: Utils.getErrorMessageFromModel(err)
            });
        }

        if (!user) {
            res.status(404).send({
                message: "Usuário não encontrado"
            });
        } else {
            res.status(201).json({
                user: user,
                message: "Usuário deletado"
            });
        }
    });
}

module.exports = {
    findUserById,
    deleteUser,
    updateUser
}