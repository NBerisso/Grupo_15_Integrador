const { body } = require('express-validator');
const path = require('path');
const fs = require("fs");


function findAll() {
    const jsonData = fs.readFileSync(path.join(__dirname, "../data/users.json"));
    const data = JSON.parse(jsonData);
    return data;
};

module.exports = {
    registerValidation: [
        body("name")
            .notEmpty()
            .withMessage("Campo NAME incompleto")
            .bail()
            .isLength({min: 4, max: 8})
            .withMessage("El nombre requiere entre 4 y 8 caracteres"),
        body("email")
            .notEmpty()
            .withMessage("Campo EMAIL incompleto")
            .isEmail()
            .withMessage("Email invalido")
            .custom(function(value,{req}){
                const users = findAll()

                const usuarioEncontrado = users.find(function(user){
                    return user.email == value
                });
                if(usuarioEncontrado){
                    return false
                } else {
                    return true
                };               
            })
            .withMessage("EMAIL ya registrado"),
        // body("image")
        //     .notEmpty()
        //     .withMessage("Campo IMAGEN incompleto"),
        body("password")
            .notEmpty()
            .withMessage("Campo PASSWORD incompleto")
    ]
    ,
    loginValidation: [
        body("email")
        .notEmpty()
        .withMessage("Campo EMAIL incompleto"),
        body("password")
        .notEmpty()
        .withMessage("Campo PASSWORD incompleto")
    ]
}