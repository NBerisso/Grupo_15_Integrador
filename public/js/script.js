
window.addEventListener("load", function (e) {
    
    

    const sidebar = document.querySelector(".sidebar");
    const hamburger = document.querySelector(".burger-menu");
    const cerrado = document.querySelector("#cerrar-sidebar");

    hamburger.addEventListener('click', () => {
        sidebar.style.width = '250px'
    })

    cerrado.addEventListener('click', () => {
        sidebar.style.width = '0px'
    })

})











