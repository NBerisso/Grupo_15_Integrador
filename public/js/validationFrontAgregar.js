window.onload = function () {
  let form = document.querySelector("#form");

  form.addEventListener("submit", (evento) => {
    let nameError = [];
    let name = document.querySelector("#name");
    let precioError = [];
    let price = document.querySelector("#price");
    let imagenError = [];
    let image = document.querySelector("#image");
    let intensityError = [];
    let intensity = document.querySelector("#intensity");
    let descriptionError = [];
    let description = document.querySelector("#description");
    
    if (name.value == "") {
      nameError.push("Name no puede estar vacio");
    }

    if (name.value.length < 5) {
      nameError.push("Name debe tener 5 caracteres o mas");
    }

    if (price.value == "") {
      precioError.push("Price no puede estar vacio");
    }

    let validExtensions = /(.jpg|.jpeg|.png)$/i;
    if (!validExtensions.exec(image.value)) {
      imagenError.push("Solamente se permiten archivos tipo .jpeg/.jpg/.png");
    }

    if (intensity.value == "") {
      intensityError.push("Intensity no puede estar vacio");
    }

    if (description.value == "") {
      descriptionError.push("Description no puede estar vacio");
    }

    if (description.value.length < 20) {
      descriptionError.push("Description debe tener 20 caracteres o mas");
    }
    
    if (nameError.length > 0 || precioError.length > 0 || imagenError.length > 0 || intensityError.length > 0 || descriptionError.length > 0) {
      evento.preventDefault();
      let nameEr = document.querySelector(".nameEr");
      nameEr.innerHTML = "";
      let priceEr = document.querySelector(".priceEr");
      priceEr.innerHTML = "";
      let imageEr = document.querySelector(".imageEr");
      imageEr.innerHTML = "";
      let intensityEr = document.querySelector(".intensityEr");
      intensityEr.innerHTML = "";
      let descriptionEr = document.querySelector(".descriptionEr");
      descriptionEr.innerHTML = "";
      for (let i = 0; i < nameError.length; i++) {
        nameEr.innerHTML += "<li><i class='far fa-times-circle'></i> " + nameError[i] + "</li>";
      }
      for (let i = 0; i < precioError.length; i++) {
        priceEr.innerHTML += "<li><i class='far fa-times-circle'></i> " + precioError[i] + "</li>";
      }
      for (let i = 0; i < imagenError.length; i++) {
        imageEr.innerHTML += "<li><i class='far fa-times-circle'></i> " + imagenError[i] + "</li>";
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
