window.onload = function () {
    let form = document.querySelector("#form");
  
    form.addEventListener("submit", (evento) => {
      let errores = [];
      let producto = document.querySelector("#producto");
      let precio = document.querySelector("#precio");
      let imagenProducto = document.querySelector("#imagen-producto");
      let intensity = document.querySelector("#intensity");
      let description = document.querySelector("#description");
  
      if (producto.value == "") {
        errores.push("producto no puede estar vacio");
      }
  
      if (producto.value.length < "5") {
        errores.push("producto debe tener 5 caracteres o mas");
      }
  
      if (precio.value == "") {
        errores.push("precio no puede estar vacio");
      }
  
      let validExtensions = /(.jpg|.jpeg|.png)$/i;
      if (!validExtensions.exec(imagenProducto.value) && (imagenProducto.value != "")) {
        errores.push("Solamente se permiten archivos tipo .jpeg/.jpg/.png");
      }
  
      if (intensity.value == "") {
        errores.push("intensity no puede estar vacio");
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