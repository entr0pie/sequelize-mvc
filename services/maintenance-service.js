const Maintenance = require("../models/maintenance-model");


async function createMaintenance(product_id, date) {
    const maintenance = Maintenance.build({ product_id: product_id, date: date });
    return await maintenance.save();
}

async function findMaintenanceById(id) {
    const maintenance = await Maintenance.findByPk(id);
    return maintenance;
}

async function findMaintenanceByProductId(id) {
    const maintenance = await Maintenance.findAll({ where: { product_id: id } });
    return maintenance;
}

module.exports = { createMaintenance, findMaintenanceById, findMaintenanceByProductId }