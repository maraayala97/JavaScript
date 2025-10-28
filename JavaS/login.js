// Tomo el usuario y la contraseña y la guardo en el localStorage, y despues debo validar usuario y contraseña , si estas son correctas dejo pasar a index

//  <div class="formulario">   
 //      <form action="" class="formulariologin">
 //           <div class="usuario">
  //              <label for="username">Usuario:</label>
  //              <input type="text" id="username" name="username" placeholder="Ingresa tu usuario">
  //          </div>
  //          <div class="contrasena">
   //             <label for="password">Contraseña:</label>
  //              <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña">
  //          </div> 
  //          <button type="submit" class="botoningresar">Ingresar</button>      
   //     </form>

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
        alert(`Bienvenido/a ${usuarioingresado.value}`);
        window.location.href = "../index.html"; 
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
    
 }

 //genero la accion del boton ingresar

 let ingresar = document.getElementById("ingresarboton");
 ingresar.addEventListener("click", validar);