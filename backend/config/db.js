const {Sequelize}= require("sequelize");
require("dotenv").config({path:"../.env"})

const sequelize = new Sequelize("DB_NAME","DB_USER","DB_PASS",{
    host: 'DB_HOST',
    dialect: 'DB_DIALECT',
});

module.exports = sequelize;