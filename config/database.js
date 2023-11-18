const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'product_api',
    'root',
    'positivo',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

sequelize.authenticate();

module.exports = sequelize;