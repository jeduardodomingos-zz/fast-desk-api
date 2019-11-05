'use strict'

const User = require('../models/security/user-model.js');
const UserLevel = require('../models/security/user-level-model.js');
const UserProfile = require('../models/security/user-profile.model.js');

exports.putUser = (req, res, next) => {
    const userData = {
        name: req.body.name,
        surname: req.body.surname,
        departmentId: req.body.departmentId,
        levelId: req.body.levelId,
        profileId: req.body.profileId,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        mobile: req.body.mobile,
        hasWhatsapp: req.body.hasWhatsapp,
        birth: req.body.birth,
        status: req.body.status
    };

    User.findOne(
        {
            where: {
                id: (req.body.id == undefined ? 0 : req.body.id)
            }
        }
    ).then((user) => {
        if (user) {

            userData.lastUpdatedBy = req.body.lastUpdatedBy;
            userData.lastUpdateDate = new Date();

            user.update(userData)
                .then(() => {
                    res.status(200).send({ message: "User updated with success.", messageCode: 200 });
                })
                .catch((error) => next(error));
        } else {

            userData.createdBy = req.body.createdBy;
            userData.creationDate = new Date();

            User.create(userData)
                .then(() => {
                    res.status(201).send({ message: "User created with success.", messageCode: 201 });
                })
                .catch((error) => next(error));
        }
    }).catch((error) => next(error));
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
                id: (req.body.id == undefined ? 0 : req.body.id)
            }
        }
    ).then((userLevel) => {

        if (userLevel) {

            userLevelData.lastUpdatedBy = req.body.lastUpdatedBy;
            userLevelData.lastUpdateDate = new Date();

            userLevel.update(userLevelData)
                .then(() => {
                    res.status(200).send({ message: "User Level updated with success.", messageCode: 200 });
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

exports.putUserProfile = (req, res, next) => {
    const userProfileData = {
        name: req.body.name,
        initials: req.body.initials,
        status: req.body.status
    };

    UserProfile.findOne(
        {
            where:
            {
                id: (req.body.id == undefined ? 0 : req.body.id)
            }
        }
    ).then((userProfile) => {

        if (userProfile) {

            userProfileData.lastUpdatedBy = req.body.lastUpdatedBy;
            userProfileData.lastUpdateDate = new Date();

            userProfile.update(userProfileData)
                .then(() => {
                    res.status(200).send({ message: "User Profile updated with success.", messageCode: 200 });
                }).catch((error) => next(error));
        } else {

            userProfileData.createdBy = req.body.createdBy;
            userProfileData.creationDate = new Date();

            UserProfile.create(userProfileData)
                .then(() => {
                    res.status(201).send({ message: "User Profile created with success.", messageCode: 201 });
                }).catch((error) => next(error));
        }
    }).catch((error) => next(error));
};

exports.getUserProfile = (req, res, next) => {
    const where = {};

    if (req.params.id) {
        where.id = Number(req.params.id);
    }

    UserProfile.findAll({ where: where })
        .then((userProfile) => {
            if (userProfile.length > 0) {
                res.status(200).send(userProfile);
            } else {
                res.status(404).send({ message: "User Profiles data not found.", messageCode: 404 });
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
            if (userLevel.length > 0) {
                res.status(200).send(userLevel);
            } else {
                res.status(404).send({ message: "User Levels data not found.", messageCode: 404 });
            }
        }).catch((error) => next(error));
};