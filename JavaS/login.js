//Tomo lo que ingreso en el input
let usuarioingresado = document.getElementById("username");
let contrasenaingresada = document.getElementById("password");

//Aca guardo el usuario y contraseña valida
let usuariovalido = "mayala";
let contrasenavalida = "mayala123";

// Guardo en el localstorage para despues poder comparar en la funcion "validar"
localStorage.setItem("usuarioguardado", usuariovalido);
localStorage.setItem("contrasenaguardada", contrasenavalida);

//Armo la funcion validar
function validar() {

    if (usuarioingresado.value === usuariovalido && contrasenaingresada.value === contrasenavalida) {

        Swal.fire({
            title: `Bienvenido/a ${usuarioingresado.value}`,
            icon: "success",
            confirmButtonText: "Continuar"
        }).then(() => {
            window.location.href = "../index.html";
        });

    } else {
        Swal.fire({
            title: "Error",
            text: "Usuario o contraseña incorrectos.",
            icon: "error",
            confirmButtonText: "Intentar de nuevo"
        });
    }
}

//genero la accion del boton ingresar
let ingresar = document.getElementById("ingresarboton");
ingresar.addEventListener("click", validar);
