function agregarcarrito() {
    compra = ""; //inicializo variable
        
        do { 
            compra = prompt(
            'Encontra tu estilo:\n'+ productos.join('\n') + 
            '\nF.Finalizar compra')

            if (compra != 'F') {
                 carrito.push(compra)
            }
        } 
        while (compra !=='F');
    }



    function calculototal() {
  let total = 0; 

  for (let i = 0; i < carrito.length; i++) {
    switch (carrito[i]) {
      case "A":
        total = total + 1200;
        break;
      case "B":
        total = total + 2500;
        break;
      case "C":
        total = total + 3500;
        break;
      case "D":
        total += 4500;
        break;
      case "E":
        total = total + 4500;
        break;
    }
  }

  return total;
}
   