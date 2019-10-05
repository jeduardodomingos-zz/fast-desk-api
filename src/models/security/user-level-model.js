const Sequelize = require('sequelize');
const database = require('../../config/database.js');

const Level = database.define('FDSK_USER_LEVELS', {
    id: {
        allowNull: false,
        autoIncremnt: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    initials: {
        allowNull: false,
        type: Sequelize.STRING(10)
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING(100)
    },
    description: {
        allowNull: false,
        type: Sequelize.STRING(500)
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
    }
});

module.exports = Level;