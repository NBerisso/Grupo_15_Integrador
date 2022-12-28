window.onload = function () {
  let form = document.querySelector(".form");

  form.addEventListener("submit", (evento) => {
    let errores = [];
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let image = document.querySelector("#image");
    let password = document.querySelector("#password");

    if (name.value == "") {
      errores.push("name no puede estar vacio");

      // name.classList.add("is-invalid");
      // name.classList.remove("is-valid");
      // }else{
      //     name.classList.add("is-valid");
      //     name.classList.remove("is-invalid");
    }

    if (name.value.length == "1") {
      errores.push("name debe tener 2 caracteres o mas");
    }

    if (email.value == "") {
      errores.push("email no puede estar vacio");
      //     email.classList.add("is-invalid");
      //     email.classList.remove("is-valid");
      // }else{
      //     email.classList.add("is-valid");
      //     email.classList.remove("is-invalid")
    }

    if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email.value)) {
      return true;
    } else {
      errores.push("email invalido");
    }

    if (image.value == "") {
      errores.push("image no puede estar vacio");
      //     image.classList.add("is-invalid");
      //     image.classList.remove("is-valid");
      // }else{
      //     image.classList.add("is-valid");
      //     image.classList.remove("is-invalid")
    }

    let validExtensions = /(.jpg|.jpeg|.png)$/i;
    if (!validExtensions.exec(image.value)) {
          errores.push("Solamente se permiten archivos tipo .jpeg/.jpg/.png");
        }

    if (password.value == "") {
      errores.push("password no puede estar vacio");
      //     password.classList.add("is-invalid");
      //     password.classList.remove("is-valid");
      // }else{
      //     password.classList.add("is-valid");
      //     password.classList.remove("is-invalid")
    }

    if (password.value.length < "8") {
      errores.push("password debe tener 8 caracteres o mas");
    }

    var decimal = /(?=.[a-z])(?=.[A-Z])$/;
    if (password.value.match(decimal)) {
      return true;
    } else {
        errores.push("Contraseña debe contener numero,un caracter especial");
    }

    if (errores.length > 0) {
      evento.preventDefault();
      let listaError = document.querySelector(".listaError");
      listaError.innerHTML = "";
      for (let i = 0; i < errores.length; i++) {
        listaError.innerHTML += "<li>" + errores[i] + "</li>";
      }
    }
  });
};
