const path = require('path');
const db = require('../../src/database/models');
const sequelize = db.sequelize;


const product = db.Products


const productAPIController = {

    'list': (req, res) => {
        product.findAll()
        .then(product => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: product.length,
                    url: 'api/product'
                },
                data: product
            }
                res.json(respuesta);
            })
    },

    'detail': (req, res) => {
        product.findByPk(req.params.id)
            .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: product.length,
                        url: 'api/product/:id'
                    },
                    data: product
                }
                res.json(respuesta);
            });
    },
}


module.exports = productAPIController;



















