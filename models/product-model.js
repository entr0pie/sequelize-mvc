const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Maintenance = require('./maintenance-model');

class Product extends Model {}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    category: {
        type: DataTypes.STRING,
        allowNull: false
    },

    listPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'product'
});

Product.hasMany(Maintenance, {foreignKey: 'product_id'});
Maintenance.belongsTo(Product, {foreignKey: 'product_id'});

Product.sync();
Maintenance.sync();

module.exports = Product;