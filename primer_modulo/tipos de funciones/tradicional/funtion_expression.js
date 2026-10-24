const nombre = function(saludo){
    return "hola " + saludo;
}
console.log(nombre("brandon"));

const suma = function(a, b){
    return a + b;
}
console.log(suma(3,5));

const areaTriangulo = function(base, altura){
    return base * altura
}
console.log("el area es: ", (40, 23));

const esPar = function (numero2) {
    if (numero2 % 2 === 0) {
        return true;
    }else{
        return false;
    }
}
console.log(esPar(5));

const temperatura = function(celsius){
    return celsius * 9 / 5 + 32;
}
console.log(temperatura(23));

const numeroMayor = function(num1, num2){
    if(num1 > num2){
        return "el mayor es: " + num1
    }else{
        return "el mayor es: " + num2
    }
}
console.log(numeroMayor(3,1));

const calcularIVA = function(numero){
    let total = numero * 0.50 + numero;
    return total
}
console.log(calcularIVA(30));

const mayoriaEdad = function(edad) {
    if(edad > 18){
        return "eres mayor de edad"
    }else{
        return "eres menor de edad"
    }
}
console.log(mayoriaEdad(40));