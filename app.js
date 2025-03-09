let numeroSecreto = 0;
let intentos = 0;
//agregando Array
let listaNumerosSorteados = [];
//Agregando numero máximo de rango en tema recursividad
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento(){
let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /* console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario == numeroSecreto);*/
    
    //console.log(numeroSecreto);
    console.log(intentos);

    if (numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos == 1 ) ? 'vez' : 'veces'}`);
        //Habilitar boton "Nuevo juego"
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //No acertó usuario
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
            
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
document.querySelector('#valorUsuario').value = '';
}

//recursividad
// Listas - Modificando array
function generarNumeroSecreto() {
    /*Se deja de retornar y se declara el valor en un número
    return Math.floor(Math.random()*10)+1;
    return numeroSecreto; y cambiar el 10 por  variable numeroMaximo*/ 
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
//Si ya sorteamos todos los números se hace esta condición if else
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p','Ya se sortearon todos los números posibles');
  }else{
  //Si el numero generado está incluido en la lista realizo if o else:
       //Método includes revisa si en la lista esta ya el número
       // listaNumerosSorteados = array ... numeroGenerado = número aleatorio
       if (listaNumerosSorteados.includes(numeroGenerado)) {
        //cuando el número ya esta en la lista se debe rear un nuevo #, se usa la funcion generarNumeroSecreto(); que ya existe.
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
  }
      
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    // se cambia a template strings asignarTextoElemento('p','Indica un número del 1 al 10');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}
    
function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    // Generar el número aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Desabilitar botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
