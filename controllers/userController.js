const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../src/database/models");



module.exports = {
  register: (req, res) => {
    res.render("crearCuenta");
  },

  processRegister: async (req, res) => {
    console.log(req.file);
    try {
      const error = validationResult(req);

      if (!error.isEmpty()) {
        return res.render("crearCuenta", {
          errors: error.mapped(),
          old: req.body,
        });
      } else {

        const newUser = {
          name: req.body.name,
          email: req.body.email,
          image: req.file ? req.file.filename : "default-image.png",
          user_password: bcryptjs.hashSync(req.body.password, 10),
        };

        await db.Users.create(newUser);

        res.redirect("/users/login");
      }
    } catch (error) {
      console.log(error);
    }
  },

  login: async (req, res) => {
    res.render("login");
  },

  processLogin: async (req, res) => {
    
      const error = validationResult(req);

      if (!error.isEmpty()) {
        return res.render("login", { errors: error.mapped() });
      }

      const userFound = await db.Users.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (userFound) {
        let passwordTrue = bcryptjs.compareSync(
          req.body.password,
          userFound.user_password
        );
        if (passwordTrue) {
          delete userFound.user_password;

          req.session.usuarioLogueado = userFound;

          if (req.body.rememberUser) {
            res.cookie("recordame", userFound.id, { maxAge: 60000 * 24 });
          }

          return res.redirect("/");
        }
      }

      return res.render("login", { errors:{
        email: {
          msg: "Las credenciales son invalidas"
        }
      } });
  },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("recordame");
    return res.redirect("/");
  },
};
