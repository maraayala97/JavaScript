let nuevatarea = document.getElementById("titulotarea");
let resumentarea = document.getElementById("tareainput");
let lista = document.getElementById("hacerlista");
let tareas = [];

if (localStorage.getItem("tareas")) {
    tareas = JSON.parse(localStorage.getItem("tareas"));
    monstrartareas();
}

function creartarea() {
    if (nuevatarea.value !== "") {
        tareas.push(nuevatarea.value);
        localStorage.setItem("tareas", JSON.stringify(tareas));
        monstrartareas();
        nuevatarea.value = "";
    }
}

function monstrartareas() {
    lista.innerHTML = ""; 
    tareas.forEach((tarea) => {
        let nuevoli = document.createElement('li');
        nuevoli.textContent = tarea;
        lista.appendChild(nuevoli);
    });
}

let botonagregar = document.getElementById("agregarboton");

botonagregar.addEventListener("click", creartarea);


