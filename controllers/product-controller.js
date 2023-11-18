const express = require("express");
const { createProduct, findProductById, findAllProducts } = require('../services/product-service');

const productController = express.Router();

async function postProduct(req, res) {
    const name = req.body.name;
    const category = req.body.category;
    const listPrice = req.body.listPrice;

    const product = await createProduct(name, category, listPrice);

    if (product == null) {res.status(404);}

    res.status(200).json(product);
}

async function getProductById(req, res) {
    const id = req.params.id;

    const product = await findProductById(id);
    
    if (product == null) {res.status(404);}

    res.status(200).json(product);
}   

async function getAllProducts(req, res) {
    const productArray = await findAllProducts();
    res.status(200).json(productArray);
}

productController.post("/", postProduct);
productController.get("/:id", getProductById);
productController.get("/", getAllProducts);

module.exports = productController;