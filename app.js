// Módulos
const express= require("express");
const app= express();
const path= require("path");
const methodOverride = require("method-override");


const mainRouter = require('./routers/mainRouter');
const productRouter = require('./routers/productRouter');

// Configuracion
// Template Engine ---------- (NO TOCAR) --------------------------
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Routers
app.use("/", mainRouter);
app.use("/productos", productRouter);


app.listen(process.env.PORT || 3030, () => {
    console.log ("servidor corriendo")
});
