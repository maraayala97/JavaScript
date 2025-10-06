let nombre = prompt('Somos BELBER tu marca favorita, por favor ingresa tu nombre:');

let primerasopciones = prompt(
  'Bienvenida ' + nombre + ', elige una de las siguientes opciones:\n' +
  '1. Comenzar compra\n' +
  '2. Lista de precios\n' +
  '3. Salir'
);

switch (primerasopciones) {
    case '1': 
            agregarcarrito();
            prodseleccionados = prompt('Hasta el momento tienes ' + carrito.length + ' productos seleccionados\n Precione X para continuar')
            console.log (carrito.join(', '))
    
    if (prodseleccionados == 'X') {
        alert('El total a pagar es de: ' + calculototal());
    }
    break;
           case '2': 
        let Listadoprecios = prompt('Los precios estan en pesos Uruguayos:\n'+ precios.join('\n') +
            '\nF.Salir'
        )

        if (Listadoprecios == 'F') {
            alert('Gracias por visitarnos. Belber')
            }
        break;
           case '3': 
        let despedida = prompt('Gracias por visitarnos. Belber!'
        )
        break;
        //elige opcion invalida
    default: alert('Esa opcion no esta contemplada en nuestra pagina. ¡Gracias por visitarnos!')
        break;
}