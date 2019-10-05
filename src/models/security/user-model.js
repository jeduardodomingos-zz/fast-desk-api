const Sequelize = require('sequelize');
const Department = require('../shared/department-model.js');
const Level = require('./user-level-model.js');
const Profile = require('./user-profile.model.js');
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
        allowNull: true,
        type: Sequelize.INTEGER
    },
    lastUpdateDate: {
        allowNull: true,
        type: Sequelize.DATE
    },
    lastPasswordUpdate: {
        allowNull: true,
        type: Sequelize.DATE
    }
});

User.Department = User.belongsTo(Department, {
    as: 'department',
    foreignKey: 'departmentId',
    targetKey: 'id',
    allowNull: false
});

User.Level = User.belongsTo(Level, {
    as: 'level',
    foreignKey: 'levelId',
    targetKey: 'id',
    allowNull: false
});

User.Profile = User.belongsTo(Profile, {
    as: 'profile',
    foreignKey: 'profileId',
    targetKey: 'id',
    allowNull: false
});


module.exports = User;