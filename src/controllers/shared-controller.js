'use strict'

const Department = require('../models/shared/department-model.js');

exports.putDepartment = (req, res, next) => {

    const departmentData = {
        initials: req.body.initials,
        name: req.body.name,
        status: req.body.status
    };

    Department.findOne(
        {
            where: {
                id: req.body.id
            }
        }
    ).then((findDepartment) => {
        if (findDepartment) {

            departmentData.lastUpdatedBy = req.body.lastUpdatedBy;
            departmentData.lastUpdateDate = new Date();

            findDepartment.update(departmentData)
                .then(() => {
                    res.status(200).send({ message: "Department updated with success.", messageCode: 200 });
                })
                .catch((error) => {
                    next(error);
                });
        } else {

            departmentData.createdBy = req.body.createdBy;
            departmentData.creationDate = new Date(),

                Department.create(departmentData)
                    .then(() => {
                        res.status(201).send({ message: "Department created with success.", messageCode: 201 });
                    })
                    .catch((error) => {
                        next(error);
                    });
        }
    }).catch((error) => {
        next(error);
    });
};

exports.getDepartment = (req, res, next) => {
    let where = {};

    if (req.params.id) {
        where.id = Number(req.params.id);
    }

    Department.findAll({ where: where })
        .then((departments) => {
            if (departments) {
                res.status(200).send(departments);
            } else {
                res.status(404).send({ message: "Departments data not found.", messageCode: 404 });
            }
        })
        .catch((error) => next(error));
};
