const express = require("express");
const path = require('path');

const controladores = {
  home: (req, res) => {
    res.render("./home.ejs");
  },

  crearCuenta: (req, res) => {
    res.render("./crearCuenta.ejs");
  },

  login: (req, res) => {
    res.render("./login.ejs");
  },

  carritoFinal: (req, res) => {
    res.render("./carritoFinal.ejs");
  },

};

module.exports = controladores;








