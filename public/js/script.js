
window.addEventListener("load", function (e) {
    
    

    const sidebar = document.querySelector(".sidebar");
    const hamburger = document.querySelector(".burger-menu");
    const logo = document.querySelector(".logotipo");

    hamburger.addEventListener('click', () => {
        sidebar.style.width = '250px'
    })

    logo.addEventListener('click', () => {
        sidebar.style.width = '0px'
    })

})











