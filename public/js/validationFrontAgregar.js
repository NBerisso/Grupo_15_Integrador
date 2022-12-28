window.onload = function () {
  let form = document.querySelector("#form");

  form.addEventListener("submit", (evento) => {
    let errores = [];
    let name = document.querySelector("#name");
    let price = document.querySelector("#price");
    let image = document.querySelector("#image");
    let intensity = document.querySelector("#intensity");
    let description = document.querySelector("#description");

    if (name.value == "") {
      errores.push("name no puede estar vacio");
    }

    if (name.value.length < "5") {
      errores.push("name debe tener 5 caracteres o mas");
    }

    if (price.value == "") {
      errores.push("price no puede estar vacio");
    }

    let validExtensions = /(.jpg|.jpeg|.png)$/i;
    if (!validExtensions.exec(image.value)) {
      errores.push("Solamente se permiten archivos tipo .jpeg/.jpg/.png");
    }

    if (intensity.value == "") {
      errores.push("intensity no puede estar vacio");
    }

    if (description.value == "") {
      errores.push("description no puede estar vacio");
    }

    if (description.value.length < "20") {
      errores.push("description debe tener 20 caracteres o mas");
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
