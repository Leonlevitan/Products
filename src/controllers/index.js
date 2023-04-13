const deleteProduct = require("./deleteProduct");
const postProduct = require("./postProduct");
const { getProducts, getByIdP } = require("./getProduct")
const putProduct = require("./putProduct");



module.exports = { deleteProduct, postProduct, getByIdP, getProducts, putProduct };