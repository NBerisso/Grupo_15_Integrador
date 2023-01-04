const { create } = require("domain");
const fs = require("fs");
const path = require("path");
const { validationResult } = require('express-validator');
const db = require("../src/database/models");


const weights = db.Weight
const grindings = db.Grinding
const product = db.Products
const shoppingcart = db.ShoppingCart



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
        try {
            const producto = await product.findByPk(req.params.id);
            const pesos = await weights.findAll();
            const moliendas = await grindings.findAll();
            res.render("detalle-producto", { pesos, moliendas, producto })

        } catch (err) {
            res.send(err)
        }
    },

    list: async (req, res) => {
        try {
            const producto = await product.findAll();
            res.render("./menu-productos.ejs", { producto })

        } catch (err) {
            res.send(err)
        }


    },

    store: async (req, res) => {
        const validationErrors = validationResult(req)

        if (!validationErrors.isEmpty()) {
            res.render("agregar-Productos", {
                errors: validationErrors.mapped(),
                errors2: validationErrors.array(),
                old: req.body
            })
        } else {
            try {
                await product.create({
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

        try {
            const productBuscado = await product.findByPk(id)

            res.render("editar-Productos", { productBuscado })
        } catch (err) {
            res.send(err);
        }

    },

    update: async (req, res) => {
        const validationErrors = validationResult(req)
        const productId = req.params.id;


        if (!validationErrors.isEmpty()) {
            const productBuscado = await product.findByPk(productId)

            res.render("editar-Productos", {
                errors: validationErrors.mapped(),
                errors2: validationErrors.array(),
                old: req.body,
                productBuscado
            })
        } else {
            try {
                let productBuscado = await product.findByPk(productId)


                if (req.file) {
                    await fs.unlink(
                        path.join(
                            __dirname,
                            "../public/img/imagenes-cafes/" +
                            productBuscado.image
                        ),
                        (error) => {
                            if (error) throw error;
                            console.log("Imagen de producto viejo eliminada!");
                        }
                    );
                }

                await product.update({
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    image: req.file ? req.file.filename : productBuscado.image,
                    intensity: req.body.intensity
                },
                    {
                        where: { id: productId },
                    }
                );
                console.log("Producto editado!");
                res.redirect("/productos/list")

            } catch (err) {
                res.send(err);
            }

        }
    },

    destroy: async (req, res) => {
        const productId = req.params.id;
        let productBuscado = await product.findByPk(productId)

        try {
            await product.destroy({ where: { id: productId } });
            
            await fs.unlink(
                path.join(
                    __dirname,
                    "../public/img/imagenes-cafes/" +
                    productBuscado.image
                ),
                (error) => {
                    if (error) throw error;
                    console.log("Imagen de producto viejo eliminada!");
                }
            );


            res.redirect("/productos/list")
        } catch (err) {
            res.send(err);
        }

    },

    agregarcarrito: async (req, res) => {
        try {

            await shoppingcart.create({
                id_user: req.session.usuarioLogueado.id,
                id_product: req.params.id,
                id_grindings: req.body.molienda,
                id_weights: req.body.peso,
                quantity: req.body.cantidad
            })
            res.redirect("/")
        } catch (err) {
            res.send(err)
        }
    }


}



module.exports = controller;