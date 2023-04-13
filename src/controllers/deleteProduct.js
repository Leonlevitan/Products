const {Product} = require("../db");
const db = require("../db");

//BORRAR PRODUCTO
function deleteProduct(req, res) {//borrar producto
    try {
        let id = req.params.id;
        db.Product.destroy({
            where: {
                id,
            },
        })
       return res.status(200).send("Removed")

    } catch (error) {
       return res.status(400).send(error)
    }
}

module.exports =  deleteProduct;