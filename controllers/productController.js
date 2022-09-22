const fs = require("fs");
const path = require("path");


function findAll() {
    const jsonData = fs.readFileSync(path.join(__dirname, "../data/products.json"));
    const data = JSON.parse(jsonData);
    return data;
};

function writeFile(data) {
    const dataString = JSON.stringify(data, null, 4);
    fs.writeFileSync(path.join(__dirname, "../data/products.json"), dataString)
};


const controller = {

    agregarProductos: (req, res) => {
        res.render("./agregar-Productos.ejs");
    },

    editarProductos: (req, res) => {
        res.render("./editar-Productos.ejs");
    },

    detalleProducto: (req, res) => {
        res.render("./detalle-producto.ejs");
    },
    
    list: (req, res) => {
        const data = findAll();
        res.render("./menu-productos", { products: data });
    },


    	// REVISAR DETAIL
    detail: (req, res) => {      
        const data = findAll();

        const cafeEncontrado = data.find(function(cafe){
            return cafe.id == req.params.id;
        });

        res.render("./Producto.ejs", { cafe: cafeEncontrado });
    },

    store: (req, res) => {
        const data = findAll();

        const newProduct = {
            id: data.lenght + 1,
            name: req.body.name,
            price: Number(req.body.price),
            description: req.body.description,
            image: req.file.filename
        }  

        data.push(newProduct);

        writeFile(data);

        res.redirect("/productos/list");
    },


}



module.exports = controller;










