const express = require("express");
const path = require('path');

const controladores = {
  home: (req, res) => {
    res.render("./home.ejs");
  },

  crearCuenta: (req, res) => {
    res.render("./crearCuenta.ejs");
  },

  producto: (req, res) => {
    res.render("./Producto.ejs");
  },

  login: (req, res) => {
    res.render("./login.ejs");
  },

  carritoFinal: (req, res) => {
    res.render("./carritoFinal.ejs");
  },

  agregarProductos: (req, res) => {
    res.render("./agregar-Productos.ejs");
  },
};

module.exports = controladores;








