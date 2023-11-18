const express = require("express");
const { createProduct, findProductById, findAllProducts } = require('../services/product-service');
const { createMaintenance } = require("../services/maintenance-service");

const productRouter = express.Router();

async function postProduct(req, res) {
    const name = req.body.name;
    const category = req.body.category;
    const listPrice = req.body.listPrice;

    const product = await createProduct(name, category, listPrice);

    return res.status(200).json(product);
}

async function getProductById(req, res) {
    const id = req.params.id;

    const product = await findProductById(id);
    
    if (product == null) {return res.status(404).send();}

    return res.status(200).json(product);
}   

async function getAllProducts(req, res) {
    const productArray = await findAllProducts();
    res.status(200).json(productArray);
}

async function postMaintenance(req, res) {
    const id = req.params.id;

    const product = await findProductById(id);

    if (product == null) {return res.status(404).send();}

    const date = req.body.date;

    const maintenance = await createMaintenance(id, date);
    return res.status(200).json(maintenance);
}

productRouter.post("/", postProduct);
productRouter.get("/:id", getProductById);
productRouter.get("/", getAllProducts);
productRouter.post("/:id/maintenance", postMaintenance);

module.exports = productRouter;