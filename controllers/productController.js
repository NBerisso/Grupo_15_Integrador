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
    
    list: async (req, res) => {
        try {
            const producto = await product.findAll();
            res.render("./menu-productos.ejs", {producto})

        }catch(err){
            res.send(err)
        }


    },

    store: async (req, res) => {
        const validationErrors = validationResult(req)

        if(!validationErrors.isEmpty()){
            res.render("agregar-Productos", {
                errors: validationErrors.mapped(),
                errors2: validationErrors.array(),
                old: req.body
            })
        } else{
            try{
                await product.create ({ 
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    image: req.file.filename,
                    intensity: req.body.intensity
                })

                res.redirect("/productos/list")

            } catch (err) {
                res.send(err);
            }
            }
        },
  
    

    edit: async (req, res) => {
        const id = req.params.id;

        try{
            const productBuscado = await product.findByPk(id)
            
            res.render("editar-Productos", {productBuscado})
        }catch (err) {
            res.send(err);
          }

        // const data = findAll();

        // const cafeEncontrado = data.find(function(cafe){
        //     return cafe.id == req.params.id;
        // });

        // res.render("editar-Productos", { cafe: cafeEncontrado});
    },

    update: async (req, res) =>{
        const validationErrors = validationResult(req)
        const productId = req.params.id;


        if(!validationErrors.isEmpty()){
            res.render("editar-Productos", {
                errors: validationErrors.mapped(),
                errors2: validationErrors.array(),
                old: req.body
            })
        } else{
            try{
                let productBuscado = await product.findByPk(productId) 

                await product.update({
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    image: req.file.filename,
                    intensity: req.body.intensity
                },
                {
                    where: { id: productId },
                }
                );

                res.redirect("/productos/list")

            } catch (err) {
                res.send(err);
            }
            }
        },
        // const data = findAll();

        // const cafeEncontrado = data.find(function(cafe){
        //     return cafe.id == req.params.id
        // })

        // cafeEncontrado.name = req.body.name;
        // cafeEncontrado.price = req.body.price;
        // cafeEncontrado.description = req.body.description;
        // cafeEncontrado.image = req.file ? req.file.filename : cafeEncontrado.image;
        // cafeEncontrado.moliendas = req.body.moliendas;

        // writeFile(data);

        // res.redirect("/productos/list");
    

    destroy: async (req, res) =>{
        const productId = req.params.id;

        try{
            await product.destroy({ where: { id: productId}});

            res.redirect("/productos/list")
        }catch (err) {
            res.send(err);
        }

        // const data = findAll();

        // const cafeEncontrado = data.findIndex(function(cafe){
        //     return cafe.id == req.params.id
        // })

        // data.splice(cafeEncontrado, 1);

        // writeFile(data);

        // res.redirect("/productos/list");
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