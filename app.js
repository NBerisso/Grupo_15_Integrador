const express= require("express");
const path= require("path");
const mainRoutes = require('./routers/index')

const app= express();
app.use(express.static("public"))

app.set('view engine', 'ejs');
app.set("views", "./views")

app.use("/", mainRoutes);

app.listen(process.env.PORT || 3030, () => {
    console.log ("servidor corriendo")
});



