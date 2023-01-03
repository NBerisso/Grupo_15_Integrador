window.onload = function () {
    let form = document.querySelector(".form");
  
    form.addEventListener("submit", (evento) => {
      let emailError = [];
      let email = document.querySelector("#email");
      let passwordError = [];
      let password = document.querySelector("#password");

      if (email.value == "") {
        emailError.push("Email no puede estar vacio");
      }

      if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email.value)) {
        return true;
      } else {
        emailError.push("Email invalido");
      }
      
      if (password.value == "") {
        passwordError.push("Password no puede estar vacio");
      }

      if (emailError.length > 0 || passwordError.length > 0) {
        evento.preventDefault();
        let emailEr = document.querySelector(".email-error");
        emailEr.innerHTML = "";
        let passwordEr = document.querySelector(".password-error");
        passwordEr.innerHTML = "";
        for (let i = 0; i < emailError.length; i++) {
          emailEr.innerHTML += "<li><i class='far fa-times-circle'></i> " + emailError[i] + "</li>";
        }
        for (let i = 0; i < passwordError.length; i++) {
          passwordEr.innerHTML += "<li><i class='far fa-times-circle'></i> " + passwordError[i] + "</li>";
        }
      }

    })
}