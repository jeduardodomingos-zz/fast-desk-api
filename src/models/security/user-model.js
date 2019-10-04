'use strict';

const Sequelize = require('sequelize');
const Department = require('../shared/department-model.js');
const Level = require('./user-level-model.js');
const database = require('../../config/database.js');

const User = database.define('FDSK_USERS', {
    id: {
        allowNull: false,
        autoIncremnt: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING(500)
    },
    surname: {
        allowNull: false,
        type: Sequelize.STRING(500)
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING(500)
    },
    password: {
        allowNull: false,
        type: Sequelize.STRING(1000)
    },
    phone: {
        allowNull: false,
        type: Sequelize.BIGINT
    },
    mobile: {
        allowNull: false,
        type: Sequelize.BIGINT
    },
    hasWhatsapp: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    birth: {
        allowNull: false,
        type: Sequelize.DATE
    },
    status: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    createdBy: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    creationDate: {
        allowNull: false,
        type: Sequelize.DATE
    },
    lastUpdatedBy: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    lastUpdateDate: {
        allowNull: false,
        type: Sequelize.DATE
    },
    lastPasswordUpdate: {
        allowNull: false,
        type: Sequelize.DATE
    }
});

User.belongsTo(Department, {
    as: 'department',
    allowNull: false
});

User.belongsTo(Level, {
    as: 'level',
    allowNull: false
});

module.exports = User;