const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
const multer = require('multer');
const path= require("path");
const middleware = require('../middlewares/middleware')
const {productsValidation} = require('../validations/productsValidation')



let storage = multer.diskStorage({
	destination: (req, file, cb) => { 
        cb(null, path.join(__dirname,'../public/img/imagenes-cafes' ))
	},

	filename: (req, file, cb) => { 
        const newFilename = file.fieldname + Date.now() + "-" + path.extname(file.originalname);
		cb(null, newFilename);
    }
})


let upload = multer({storage: storage});


router.get("/agregar-Productos", middleware, productController.agregarProductos);
router.post("/agregar-Productos", upload.single('image'), productsValidation, productController.store);


router.get("/editar-Productos/:id", middleware, productController.edit);
router.put("/editar-Productos/:id", productController.update);
router.delete("/eliminar/:id", productController.destroy);

router.get("/detalle-producto/:id", productController.detalleProducto);

router.get("/list", productController.list);


module.exports = router