const express= require("express");
const path= require("path");
const app= express();

app.use(express.static(path.join(__dirname,"public")));

app.listen(3000, () => console.log("Servidor corriendo"));

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.get("/home", function(req,res){
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.get("/crearCuenta", function(req,res){
    res.sendFile(path.join(__dirname,"/views/crearCuenta.html"))
})

app.get("/Producto", function(req,res){
    res.sendFile(path.join(__dirname,"/views/Producto.html"))
})

app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname,"/views/login.html"))
})

app.get("/miCarrito", function(req,res){
    res.sendFile(path.join(__dirname,"/views/miCarrito.html"))
})

app.get("/carritoFinal", function(req,res){
    res.sendFile(path.join(__dirname,"/views/carritoFinal.html"))
})