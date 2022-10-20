// Módulos
const express= require("express");
const app= express();
const path= require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const mainRouter = require('./routers/mainRouter');
const productRouter = require('./routers/productRouter');
const userRouter = require('./routers/userRouter');
const localsMiddleware = require('./middlewares/localsMiddle');
const recordameMiddle = require('./middlewares/recordameMiddle');



// Configuracion
// Template Engine ---------- (NO TOCAR) --------------------------
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({secret: "Mensaje secreto", resave: false, saveUninitialized: true}));
app.use(cookieParser());
app.use(recordameMiddle);
app.use(localsMiddleware);


// Routers
app.use("/", mainRouter);
app.use("/productos", productRouter);
app.use("/users", userRouter);

app.listen(process.env.PORT || 3030, () => {
    console.log ("servidor corriendo")
});
