const {Product }= require("../db");


async function dbProcucts (){
    return await Product.findAll({})
};

//TODOS LOS PRODUCTOS
async function getProducts (req, res)  {//todos los productos
    const { pName } = req.query;
    let totalProducts =  await dbProcucts();
    if (pName) {
        let searchProduct = totalProducts.filter((p) => {
            p.name.toLowerCase(), includes(pName.toLocaleLowerCase())
        })
        searchProduct.length ? res.status(200).send(searchProduct) : res.status(404).json({ msg: `Game not found${pName}` })
    } else {
        res.status(200).json(totalProducts);
    }
};

//BUSQUEDA DE PRODUCTO POR ID
async function getByIdP(req, res)  {//busqueda de producto por id
    const { id } = req.params;
    try {
        const dbP = await Product.findByPk(id, {
        });
        return res.status(200).send(dbP)
    } catch (error) {
        res.status(404).json({ error: "Id not found" });
    }
};

module.exports={getProducts,getByIdP};