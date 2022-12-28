const { body } = require('express-validator');
const db = require("../src/database/models")

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
                return db.Users.findOne({
                    where:{
                        email: value
                    }
                }).then((email) =>{
                    if(email){
                        return Promise.reject("Email ya registrado")
                    }
                });           
            })
            .withMessage("EMAIL ya registrado"),
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