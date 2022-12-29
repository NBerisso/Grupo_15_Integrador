const path = require('path');
const db = require('../../src/database/models');
const sequelize = db.sequelize;


const user = db.Users


const userAPIController = {

    'list': (req, res) => {
        user.findAll()
        .then(user => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: user.length,
                    url: 'api/user'
                },
                data: user
            }
                res.json(respuesta);
            })
    },
}




module.exports = userAPIController

















