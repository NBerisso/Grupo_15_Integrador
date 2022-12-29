const path = require('path');
const db = require('../../src/database/models');
const sequelize = db.sequelize;


const grinding = db.Grinding


const grindingAPIController = {

    'list': (req, res) => {
        grinding.findAll()
        .then(grinding => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: grinding.length,
                    url: 'api/grinding'
                },
                data: grinding
            }
                res.json(respuesta);
            })
    },
}



module.exports = grindingAPIController
















