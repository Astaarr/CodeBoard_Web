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



// Selecciona todos los elementos HTML que tienen la clase "input"
const inputs = document.querySelectorAll(".input");

//Hace el focus como de legend
function focusFunc() {
    let parent = this.parentNode;  // Obtiene el elemento padre del elemento actual
    parent.classList.add("focus");  // Añade la clase "focus" al elemento padre
}

//Hace el blur como de legend
function blurFunc() {
  let parent = this.parentNode;  // Obtiene el elemento padre del elemento actual
  // Si el campo está vacío, quita la clase "focus"
if (this.value == "") {
    parent.classList.remove("focus");
}
}

// Itera sobre cada elemento de la lista "inputs"
inputs.forEach((input) => {
  // Agrega un event listener para (focus)
    input.addEventListener("focus", focusFunc);
  // Agrega un event listener para (blur)
    input.addEventListener("blur", blurFunc);
});

document.getElementById('sign-in').addEventListener('click', function() {
    document.querySelector('.register').classList.add('hide');
    document.querySelector('.login').classList.remove('hide');
});

document.getElementById('sign-up').addEventListener('click', function() {
    document.querySelector('.login').classList.add('hide');
    document.querySelector('.register').classList.remove('hide');
});
