window.onload = function () {
  let form = document.querySelector(".form");

  form.addEventListener("submit", (evento) => {
    let nameError = [];
    let name = document.querySelector("#name");
    let emailError = [];
    let email = document.querySelector("#email");
    let imageError = [];
    let image = document.querySelector("#image");
    let passwordError = [];
    let password = document.querySelector("#password");

    if (name.value == "") {
      nameError.push("Name no puede estar vacio");

    }

    if (name.value.length == "1") {
      nameError.push("Name debe tener 2 caracteres o mas");
    }

    if (email.value == "") {
      emailError.push("Email no puede estar vacio");
    }

    if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email.value)) {
      return true;
    } else {
      emailError.push("Email invalido");
    }

    if (image.value == "") {
      imageError.push("Image no puede estar vacio");
    }

    let validExtensions = /(.jpg|.jpeg|.png)$/i;
    if (!validExtensions.exec(image.value)) {
          imageError.push("Formato invalido");
        }

    if (password.value == "") {
      passwordError.push("Password no puede estar vacio");
    }

    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password.value)) {
      return true;
    } else {
      passwordError.push("Password debe contener una Mayuscula, numeros y algún simbolo");
    }

    if (nameError.length > 0 || emailError.length > 0 || imageError.length > 0 || passwordError.length > 0) {
      evento.preventDefault();
      let nameEr = document.querySelector(".name-error");
      nameEr.innerHTML = "";
      let emailEr = document.querySelector(".email-error");
      emailEr.innerHTML = "";
      let imageEr = document.querySelector(".image-error");
      imageEr.innerHTML = "";
      let passwordEr = document.querySelector(".password-error");
      passwordEr.innerHTML = "";
      for (let i = 0; i < nameError.length; i++) {
        nameEr.innerHTML += "<li><i class='far fa-times-circle'></i> " + nameError[i] + "</li>";
      }
      for (let i = 0; i < emailError.length; i++) {
        emailEr.innerHTML += "<li><i class='far fa-times-circle'></i> " + emailError[i] + "</li>";
      }
      for (let i = 0; i < imageError.length; i++) {
        imageEr.innerHTML += "<li><i class='far fa-times-circle'></i> " + imageError[i] + "</li>";
      }
      for (let i = 0; i < passwordError.length; i++) {
        passwordEr.innerHTML += "<li><i class='far fa-times-circle'></i> " + passwordError[i] + "</li>";
      }
    }
  });
};
