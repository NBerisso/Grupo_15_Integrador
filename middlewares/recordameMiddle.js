const db = require('../src/database/models');

// function findAll() {
//     const jsonData = fs.readFileSync(path.join(__dirname, "../data/users.json"));
//     const data = JSON.parse(jsonData);
//     return data;
//   };
  

async function recordame (req, res, next){
    if(!req.session.usuarioLogueado && req.cookies.recordame){
        // const users = findAll();

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