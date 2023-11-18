const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Maintenance extends Model {}

Maintenance.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    date: {
        type: DataTypes.STRING,
        allowNull: false
    },

    product_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'maintenance'
});

module.exports = Maintenance;