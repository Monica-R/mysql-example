const mysql = require('mysql2'),
    { Sequelize } = require('sequelize');

const connection = new Sequelize('database', 'username', 'password',{
    host: '',
    dialect: 'mysql'
});

module.exports = {}