const User = require('../models/user-model');

async function createProduct(name, category, listPrice) {
    const newProduct = User.build({name: name, category: category, listPrice: listPrice});
    await newProduct.save();
    return newProduct;
}

async function findProductById(id) {
    const product = await User.findByPk(id);
    return product;
}

async function findAllProducts() {
    const productArray = await User.findAll();
    return productArray;
}

module.exports = {createProduct, findProductById, findAllProducts}