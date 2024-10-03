var menu = document.getElementById('hmenu');
var menuaberto = document.getElementById('menu-aberto');

menu.addEventListener('click', abrir)

function abrir() {
    menu.src = ""
    menuaberto.style.display = "flex"
}