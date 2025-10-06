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
        compra = "";
        total = 0;
        switch (compra) {
            case 'A':

            total = total + 1200;
            Console.log ("Tu total hasta el momento es de:" + total);    
            break;
            case 'B':

            total = total + 2500;
            Console.log ("Tu total hasta el momento es de:" + total);    
            break;
            case 'C':

            total = total + 3500;
            Console.log ("Tu total hasta el momento es de:" + total);    
            break;
            case 'D':

            total = total + 4500;
            Console.log ("Tu total hasta el momento es de:" + total);    
            break;
            case 'E':

            total = total + 4500;
            Console.log ("Tu total hasta el momento es de:" + total);
            break;       
        }  
    } while (compra != 'F');