document.addEventListener("DOMContentLoaded", (event) => {

    // seleccionar mis dos elementos principales
    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let mobile_menu = document.querySelector(".menu-mobile");

    //funcion mostrar y ocultar

    const showHiddenMenu = () => {
        let show = document.querySelector(".menu-mobile--show");

        if (show) {
            mobile_menu.classList.remove("menu-mobile--show");
        } else {
            mobile_menu.classList.add("menu-mobile--show");
        }
    };



    // al dar click al boton del menu mostrar el menu de navegacion
    mobile_btn.addEventListener("click", showHiddenMenu);


    //al redimensionar la pantalla por debajo de 1000px ocultar el menu si es necesario
    window.addEventListener("resize", () => {
        let window_width = parseInt(document.body.clientWidth);
        if (window_width >= 1000) {
            mobile_menu.classList.remove("menu-mobile--show");
        }
    });

    //poder cerrar el menu con el boton x
    let btn_close = document.querySelector(".menu-mobile__close");

    btn_close.addEventListener("click", showHiddenMenu);


    //desplegar submenus
    let menu_item = document.querySelectorAll(".menu-mobile__item");


    menu_item.forEach(item => {

        item.addEventListener("click", (event) => {
            let submenu = item.lastElementChild;

            if (submenu.className === "menu-mobile__submenu-mobile") {
                if (submenu.style.display === "block") {
                    submenu.style.display = "none"
                } else {
                    submenu.style.display = "block"
                }

            };
        });

    });

});