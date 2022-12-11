const { create } = require("domain");
const fs = require("fs");
const path = require("path");
const { validationResult } = require('express-validator');
const db = require("../src/database/models");


const weights = db.Weight
const grindings = db.Grinding
const product = db.Products
const shoppingcart = db.ShoppingCart
// const users = db.user


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
    
    detalleProducto: async (req, res) => {
        // metodo usando JSON
        // const data = findAll();
        // const cafeEncontrado = data.find(function(cafe){
        //     return cafe.id == req.params.id;
        // });
        // res.render("detalle-producto", { cafe: cafeEncontrado });
        try {
            const producto = await product.findByPk(req.params.id);
            const pesos = await weights.findAll();
            const moliendas = await grindings.findAll();
            res.render("detalle-producto", {pesos, moliendas, producto})

        }catch(err){
            res.send(err)
        }
    },
    
    list: (req, res) => {
        const data = findAll();
        res.render("./menu-productos.ejs", { products: data });
    },

    store: (req, res) => {
        const validationErrors = validationResult(req)

        if(!validationErrors.isEmpty()){
            res.render("agregar-Productos", {
                errors: validationErrors.mapped(),
                errors2: validationErrors.array(),
                old: req.body
            })
        }else{
            const data = findAll();
        
            const newProduct = {
                id: data.length + 1,
                name: req.body.name,
                price: Number(req.body.price),
                description: req.body.description,
                image: req.file.filename,
                moliendas: [...req.body.moliendas]
            }  
    
            data.push(newProduct);
    
            writeFile(data);
    
            res.redirect("/productos/list");
        }        
    },

    edit: (req, res) => {
        const data = findAll();

        const cafeEncontrado = data.find(function(cafe){
            return cafe.id == req.params.id;
        });

        res.render("editar-Productos", { cafe: cafeEncontrado});
    },

    update: (req, res) =>{
        const data = findAll();

        const cafeEncontrado = data.find(function(cafe){
            return cafe.id == req.params.id
        })

        cafeEncontrado.name = req.body.name;
        cafeEncontrado.price = req.body.price;
        cafeEncontrado.description = req.body.description;
        cafeEncontrado.image = req.file ? req.file.filename : cafeEncontrado.image;
        cafeEncontrado.moliendas = req.body.moliendas;

        writeFile(data);

        res.redirect("/productos/list");
    },

    destroy: (req, res) =>{
        const data = findAll();

        const cafeEncontrado = data.findIndex(function(cafe){
            return cafe.id == req.params.id
        })

        data.splice(cafeEncontrado, 1);

        writeFile(data);

        res.redirect("/productos/list");
    },

    agregarcarrito: async (req, res) => {
        try{

        await shoppingcart.create({ 
            id_user: "",
            id_product: req.params.id,
            id_grindings: req.body.molienda,
            id_weights: req.body.peso,
            quantity: req.body.cantidad
        })
        res.redirect("/")
        }catch(err){
            res.send(err)
        }
    }


}



module.exports = controller;