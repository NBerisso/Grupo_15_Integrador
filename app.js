// Módulos
const express= require("express");
const app= express();
const path= require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const mainRouter = require('./routers/mainRouter');
const productRouter = require('./routers/productRouter');
const userRouter = require('./routers/userRouter');
const localsMiddleware = require('./middlewares/localsMiddle');
const recordameMiddle = require('./middlewares/recordameMiddle');


// API routes

const productApiRouter = require('./routers/api/productApiRouter')
const userApiRouter = require('./routers/api/userApiRouter')
const grindingApiRouter = require('./routers/api/grindingApiRouter')

//RENDER DEPLOY CONFIG
const port = process.env.PORT || 3030;
require("dotenv").config();


// Configuracion
// Template Engine ---------- (NO TOCAR) --------------------------
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: "Mensaje secreto", 
    resave: false, 
    saveUninitialized: true
}));
app.use(cookieParser());

app.use(recordameMiddle);
app.use(localsMiddleware);


// Routers
app.use("/", mainRouter);
app.use("/productos", productRouter);
app.use("/users", userRouter);


// Api Routers
app.use('/api', productApiRouter);
app.use('/api', userApiRouter);
app.use('/api', grindingApiRouter);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
    console.log(`http://localhost:${port}`);
  });
  
