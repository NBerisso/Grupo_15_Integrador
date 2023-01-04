const db = require('../../src/database/models');
const { Op } = require("sequelize");
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

    'FirstCoffee': (req, res) => {
        product.findAll({
            limit: 3,
            order: [["id", "ASC"]],
        })
        .then(product => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: product.length,
                    url: 'api/products/firstCoffee'
                },
                data: product
            }
                res.json(respuesta);
            })
      },

      lastProduct: (req, res) => {
        product.findAll({
          limit: 1,
          order: [["id", "DESC"]],
        }).then((product) => {
          let response = {
            meta: {
              status: 200,
              url: "/api/products/lastProduct",
            },
            data: product,
          };
          res.json(response);
        });
      },

      search: (req, res) => {
        product.findAll({
          where: { name: { [Op.like]: "%" + req.query.product + "%" } },
        }).then((products) => {
          let response = {
            meta: {
              status: 200,
              total: products.length,
              url: "api/products/search/",
            },
            data: products,
          };
          res.json(response);
        });
      },

}


module.exports = productAPIController;

















