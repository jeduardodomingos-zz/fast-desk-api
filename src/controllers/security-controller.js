'use strict'

const User = require('../models/security/user-model.js');
const UserLevel = require('../models/security/user-level-model.js');

exports.createUser = (req, res, next) => {
    const user = User.build({
        name: req.body.name,
        surname: req.body.surname,
        departmentId: req.body.departmentId,
        levelId: req.body.levelId,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        mobile: req.body.mobile,
        hasWhatsapp: req.body.hasWhatsapp,
        birth: req.body.birth,
        status: req.body.status,
        createdBy: req.body.createdBy,
        creationDate: new Date(),
        lastUpdatedBy: req.body.lastUpdatedBy,
        lastUpdateDate: new Date()
    });

    user.save()
        .then(() => {
            res.status(201).send({ message: "User created with success.", messageCode: 201 });
        })
        .catch((error) => {
            next(error);
        });
};

exports.putUserLevel = (req, res, next) => {
    const userLevelData = {
        initials: req.body.initials,
        name: req.body.name,
        description: req.body.description,
        status: req.body.status
    };

    UserLevel.findOne(
        {
            where: {
                id: Number(req.body.id)
            }
        }
    ).then((userLevel) => {

        if (userLevel) {

            userLevelData.lastUpdatedBy = req.body.lastUpdatedBy;
            userLevelData.lastUpdateDate = new Date();

            userLevel.update(userLevelData)
                .then(() => {
                    res.status(201).send({ message: "User Level updated with success.", messageCode: 201 });
                })
                .catch((error) => next(error));
        } else {

            userLevelData.createdBy = req.body.createdBy;
            userLevelData.creationDate = new Date();

            UserLevel.create(userLevelData)
                .then(() => {
                    res.status(201).send({ message: "User Level created with success.", messageCode: 201 });
                })
                .catch((error) => next(error));
        }
    }).catch((error) => next(error));
};

exports.getUserLevel = (req, res, next) => {
    const where = {};

    if (req.params.id) {
        where.id = Number(req.params.id);
    }

    UserLevel.findAll({ where: where })
        .then((userLevel) => {
            if (userLevel) {
                res.status(200).send(userLevel);
            } else {
                res.status(404).send({ message: "User Levels data not found.", messageCode: 404 });
            }
        }).catch((error) => next(error));
};