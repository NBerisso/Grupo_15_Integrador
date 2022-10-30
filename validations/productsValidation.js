const {body} = require('express-validator');
const path = require('path');

module.exports = {
    productsValidation: [
        body('name')
            .notEmpty()
            .withMessage('Debe tener un nombre')
            .bail(),
        body('price')
            .notEmpty()
            .withMessage('Debe tener precio'),
        body('image')
            .custom(function(value, {req}){
            return req.file;
            })
            .withMessage('imagen requerida')
            .bail()
            .custom(function(value, {req}){
                const extensionesAceptadas = ['.jpg', '.png'];
                const extension = path.extname(req.file.originalname);
                console.log(extensionesAceptadas.includes(extension))
                return extensionesAceptadas.includes(extension);
            })
            .withMessage('Formato invalido')
    ]
}






























