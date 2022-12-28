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
        body('intensity')
            .notEmpty()
            .withMessage('Debe tener intensidad'),
        body('description')
            .notEmpty()
            .withMessage('Debe tener una descripcion'),
        body('image')
            .custom(function(value, {req}){
            return req.file;
            })
            .withMessage('imagen requerida')
            .bail()
            .custom(function(value, {req}){
                const extensionesAceptadas = ['.jpg','.jpeg','.png'];
                const extension = path.extname(req.file.originalname);
                console.log(extensionesAceptadas.includes(extension))
                return extensionesAceptadas.includes(extension);
            })
            .withMessage('Formato invalido')
    ],

    updateValidation: [
        body('name')
            .notEmpty()
            .withMessage('Debe tener un nombre')
            .bail(),
        body('price')
            .notEmpty()
            .withMessage('Debe tener precio'),
        body('intensity')
            .notEmpty()
            .withMessage('Debe tener intensidad'),
        body('description')
            .notEmpty()
            .withMessage('Debe tener una descripcion'),
        body('image')
            .custom(function(value, {req}){
                if(req.file){
                    const extensionesAceptadas = ['.jpg', '.png'];
                    const extension = path.extname(req.file.originalname);
                    console.log(extensionesAceptadas.includes(extension))
                    return extensionesAceptadas.includes(extension);  
                } else {
                    return true
                }        
            })
            .withMessage('Formato invalido')
    ]
}






























