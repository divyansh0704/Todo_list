const {Sequelize}= require("sequelize");
const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, "../.env") })

const sequelize = new Sequelize(process.env.BASE_URL,{
    
    dialect:process.env.DB_DIALECT,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false, // Required for Neon + Render
        },
    },
    
    logging: false 
});

module.exports = sequelize;