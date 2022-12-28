const db = require('../src/database/models');



async function recordame (req, res, next){
    if(!req.session.usuarioLogueado && req.cookies.recordame){

        const userFound = await db.Users.findOne({
            where: {
                id: req.cookies.recordame
            }
        })

        req.session.usuarioLogueado = {
            id: userFound.id,
            email: userFound.email
        };

        return next();
    }

    return next();
}



module.exports = recordame;