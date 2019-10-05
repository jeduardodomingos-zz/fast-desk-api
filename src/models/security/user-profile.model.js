const Sequelize = require('sequelize');
const database = require('../../config/database.js');

const Profile = database.define('FDSK_USER_PROFILES', {
    id: {
        allowNull: false,
        autoIncremnt: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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

module.exports = Profile;