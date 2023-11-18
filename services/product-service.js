const Product = require('../models/product-model');

async function createProduct(name, category, listPrice) {
    const newProduct = Product.build({name: name, category: category, listPrice: listPrice});
    await newProduct.save();
    return newProduct;
}

async function findProductById(id) {
    const product = await Product.findByPk(id);
    return product;
}

async function findAllProducts() {
    const productArray = await Product.findAll();
    return productArray;
}

module.exports = {createProduct, findProductById, findAllProducts}