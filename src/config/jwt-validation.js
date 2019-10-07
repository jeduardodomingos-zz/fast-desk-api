'use strict'

const jwt = require('jsonwebtoken');

exports.validateAuthentication = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        res.status(403).send({ message: "User Unauthorized. No token Provided.", messageCode: 401 });
    } else {
        jwt.verify(token, process.env.SECRET, (error, decoded) => {
            if (error) {
                res.status(403).send({ message: "User Unauthorized. Invalid Token.", messageCode: 401 });
            } else {
                next();
            }
        });
    }
}