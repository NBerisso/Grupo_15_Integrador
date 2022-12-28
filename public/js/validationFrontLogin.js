window.onload = function () {
    let form = document.querySelector(".form");
  
    form.addEventListener("submit", (evento) => {
      let errores = [];
      let email = document.querySelector("#email");
      let password = document.querySelector("#password");

      if (email.value == "") {
        errores.push("email no puede estar vacio");
      }

      if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email.value)) {
        return true;
      } else {
        errores.push("email invalido");
      }
      
      if (password.value == "") {
        errores.push("password no puede estar vacio");
      }


      if (errores.length > 0) {
        evento.preventDefault();
        let listaError = document.querySelector(".listaError");
        listaError.innerHTML = "";
        for (let i = 0; i < errores.length; i++) {
          listaError.innerHTML += "<li>" + errores[i] + "</li>";
        }
      }

    })
}