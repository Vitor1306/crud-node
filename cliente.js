const Sequelize = require('sequelize');
const database = require('./db');

const Cliente = database.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    balance: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    birthday: {
        type: Sequelize.DATE,
        allowNull: false
    },
    age: {
        type: Sequelize.NUMBER,
        allowNull: false
    }
})

module.exports = Cliente;