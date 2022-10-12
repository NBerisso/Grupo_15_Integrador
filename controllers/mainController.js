const express = require("express");
const path = require('path');

const controladores = {
  home: (req, res) => {
    res.render("./home.ejs");
  },

  carritoFinal: (req, res) => {
    res.render("./carritoFinal.ejs");
  },

};

module.exports = controladores;








