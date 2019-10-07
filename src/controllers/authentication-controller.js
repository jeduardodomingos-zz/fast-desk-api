'use strict'

const jwt = require('jsonwebtoken');
const User = require('../models/security/user-model.js');

exports.login = (req, res, next) => {
    User.findOne(
        {
            where: {
                email: req.params.email,
                password: req.params.password
            }
        }
    ).then((user) => {
        if (user) {
            jwt.sign({ user: user }, process.env.SECRET, { expiresIn: process.env.TOKEN_VALID_TIME }, (error, token) => {
                res.status(200).send({ user: user, token: token });
            });
        } else {
            res.status(401).send({ message: "User Unauthorized", messageCode: 401 });
        }
    }).catch((err) => {
        next(err);
    });
};