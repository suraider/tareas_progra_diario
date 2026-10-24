// ejercicio 1
console.log("Contar del 1 al 10");
function contar(numero){
    if(numero > 10){
        return
    }
    console.log(numero);
    contar(numero + 1);
}
contar(1)

// ejercicio 2
console.log("Contar del 10 al 1");
function contarAtras(numeroReversa){
    if(numeroReversa < 0){
        return
    }
    console.log(numeroReversa);
    contarAtras(numeroReversa - 1);
}
contarAtras(10)

// ejercicio 3
console.log("Contar hasta N");
function contarHasta(hastaLimite){
    if(hastaLimite > 5){
        return
    }
    console.log(hastaLimite);
    contarHasta(hastaLimite + 1);
}
contarHasta(1)

// ejercicio 4
console.log("Contar desde N hasta 1");
function contarAtrasHasta(numeroReversaHasta){
    if(numeroReversaHasta < 0){
        return
    }
    console.log(numeroReversaHasta);
    contarAtras(numeroReversaHasta - 1);
}
contarAtrasHasta(7)

// ejercicio 5
console.log("Mostrar números pares");
function contarPar(numeroPar){
    if(numeroPar > 10){
        return
    }
 if (numeroPar %2 === 0){
     console.log(numeroPar);
 }
    contarPar(numeroPar + 1);
}
contarPar(1)

// ejercicio 6
console.log("Sumar del 1 hasta N");
function suma(numeros){
    if (numeros <= 1){
        return 1;
    }
    return numeros + suma(numeros - 1);
}
console.log(suma(5));


// ejercicio7
console.log("Factorial de un número");
function factorial(num){
    if (num <= 1){
        return 1;
    }
    return num * factorial(num - 1);
}
console.log(factorial(5));

// ejercicio8
console.log("Contar cuántos dígitos tiene un número");
function contarMostrar(numeroMostrar){
    if(numeroMostrar > 5){
        console.log("numero final " + (numeroMostrar - 1));
        return
    }
    console.log(numeroMostrar);
    contarMostrar(numeroMostrar + 1);
}
contarMostrar(1)

// ejercicio9
console.log("Sumar los dígitos de un número");
function sumaNum(numSuma){
    if (numSuma <= 1){
        return 1;
    }
    return numSuma + sumaNum(numSuma - 1);
}
console.log(sumaNum(5));

// ejercicio10
console.log("Crear una función que calcule base^exponente mediante recursividad.");
function calcularPotencia(base, exponente){
    if(exponente === 0){
        return 1;
    }else{
        return base * calcularPotencia(base, exponente - 1)
    }
}
console.log(calcularPotencia(5,2));