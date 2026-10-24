// ejercicio1
function saludar(nombre) {
    return "hola " + nombre;
}
console.log(saludar("brandon"));

// ejercicio2
function suma(a, b) {
    return a + b;
}
console.log(suma(3, 5));

// ejercicio3
function areaTriangulo(base, altura) {
    return base * altura
}
console.log("el area es: ", areaTriangulo(23, 56));

// ejercicio4
function esPar(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(esPar(4));

// ejercicio5
function temperatura(celsius) {
    return celsius * 9 / 5 + 32;
}
console.log(temperatura(15));

// ejercicio6
function numMayor(num1, num2) {
    if (num1 > num2) {
        return "el mayor es: " + num1;
    } else {
        return "el mayor es:" + num2;
    }
}
console.log(numMayor(9, 2));

// ejercicio8
function calcularIVA(numero) {
    let total = numero * 0.05 + numero;
    return total
}
console.log(calcularIVA(50));

// ejercicio9
function mayoriaEdad(edad) {
    if (edad > 18) {
        return "eres mayor de edad";
    } else {
        return "eres menor de edad";
    }
}
console.log(mayoriaEdad(34));