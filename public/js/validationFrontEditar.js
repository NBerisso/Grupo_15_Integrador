window.onload = function () {
    let form = document.querySelector("#form");
  
    form.addEventListener("submit", (evento) => {
      let productoError = [];
      let producto = document.querySelector("#producto");
      let precioError = [];
      let precio = document.querySelector("#precio");
      let imagenError = [];
      let imagenProducto = document.querySelector("#imagen-producto");
      let intensityError = [];
      let intensity = document.querySelector("#intensity");
      let descriptionError = [];
      let description = document.querySelector("#description");
  
      if (producto.value == "") {
        productoError.push("Producto no puede estar vacio");
      }

      if (producto.value.length < 5) {
        productoError.push("Producto debe tener 5 caracteres o mas");
      }
  
      if (precio.value == "") {
        precioError.push("Precio no puede estar vacio");
      }
  
      let validExtensions = /(.jpg|.jpeg|.png)$/i;
      if (!validExtensions.exec(imagenProducto.value) && (imagenProducto.value != "")) {
        imagenError.push("Solamente se permiten archivos tipo .jpeg/.jpg/.png");
      }
  
      if (intensity.value == "") {
        intensityError.push("Intensity no puede estar vacio");
      }
  
      if (description.value.length < 20) {
        descriptionError.push("Description debe tener 20 caracteres o mas");
      }
  
      if (productoError.length > 0 || precioError.length > 0 || imagenError.length > 0 || intensityError.length > 0 || descriptionError.length > 0 ) {
        evento.preventDefault();
        let productoEr = document.querySelector(".productoEr");
        productoEr.innerHTML = "";
        let precioEr = document.querySelector(".precioEr");
        precioEr.innerHTML = "";
        let imagenEr = document.querySelector(".imagenEr");
        imagenEr.innerHTML = "";
        let intensityEr = document.querySelector(".intensityEr");
        intensityEr.innerHTML = "";
        let descriptionEr = document.querySelector(".descriptionEr");
        descriptionEr.innerHTML = "";
        for (let i = 0; i < productoError.length; i++) {
          productoEr.innerHTML += "<li><i class='far fa-times-circle'></i> " + productoError[i] + "</li>";
        }
        for (let i = 0; i < precioError.length; i++) {
          precioEr.innerHTML += "<li><i class='far fa-times-circle'></i> " + precioError[i] + "</li>";
        }
        for (let i = 0; i < imagenError.length; i++) {
          imagenEr.innerHTML += "<li><i class='far fa-times-circle'></i> " + imagenError[i] + "</li>";
        }
        for (let i = 0; i < intensityError.length; i++) {
          intensityEr.innerHTML += "<li><i class='far fa-times-circle'></i> " + intensityError[i] + "</li>";
        }
        for (let i = 0; i < descriptionError.length; i++) {
          descriptionEr.innerHTML += "<li><i class='far fa-times-circle'></i> " + descriptionError[i] + "</li>";
        }
      }
    });
  };