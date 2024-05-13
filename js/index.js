// Funcion mostrarMenu, cuando le demos click al boton hamburguesa se mostrara el menu ya que se pondrá display flex
function mostrarMenu(){
    const menu = document.querySelector('.hamburguesa_bar')
    menu.style.display = 'flex'
}

// Funcion cerrarMenu, cuando le demos click al boton X se cerrará el menu ya que se pondrá display none
function cerrarMenu(){
    const cerrar = document.querySelector('.hamburguesa_bar')
    cerrar.style.display = 'none' 
}

// Cuando escuche que se le de click en alguna opción del menu, se cerrará el menu
const opcionesMenu = document.querySelectorAll('.hamburguesa_opcion');
opcionesMenu.forEach(opcion => {
    opcion.addEventListener('click', () => {
        cerrarMenu(); 
    });
});