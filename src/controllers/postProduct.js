const {Product} = require("../db")



//INGRESA NUEVO PRODUCTO
function postProduct(req, res) {//ingresar nuevo producto
    const {
        name,
        model,
        cost,
    } = req.body
    if (!name || !model || !cost) { res.status(404).json({ msg: "missing data" }) }
    else {
        const obj = {
            name,
            model,
            cost,
        };
        const newP = Product.create(obj);

        res.status(200).json({ msg: "Loaded Product" })
    }
};
module.exports= postProduct;
