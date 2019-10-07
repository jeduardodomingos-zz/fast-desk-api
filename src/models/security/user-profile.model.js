const Sequelize = require('sequelize');
const database = require('../../config/database.js');

const Profile = database.define('FDSK_USER_PROFILES', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING(500)
    },
    initials: {
        allowNull: false,
        type: Sequelize.STRING(10)
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
    }
});

module.exports = Profile;