const {Product} = require("../db");
const db = require("../db");


//MODIFICA PRODUCTO
function putProduct(req, res) {//modificar producto
    try {
        const id = req.params.id;
        const { cost } = req.body;
        if (!cost) { return res.status(400).json({ msg: "missing data" }) }
        //if (cost > 1 && cost < 1000000) { return res.status(400).json({ msg: "Only numbers" }) }

        let pr = db.Product.update({ cost }, {
            where: {
                id,
            },
        });
        if (!pr) { return res.status(400).json({ msg: "No product found with the id entered" }) }
        return res.status(200).send("Producto actualizado!");
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports=putProduct;