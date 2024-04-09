const { connection } = require("../database/index.js");
const { DataTypes } = require("sequelize");


const User = connection.define('user', {
    firstName : {
        type: DataTypes.STRING
    }, 
    age : {
        type: DataTypes.INTEGER
    }
});

module.exports = User 