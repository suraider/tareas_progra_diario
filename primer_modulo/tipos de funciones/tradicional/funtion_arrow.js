const saludar = (nombre) => "hola " + nombre
console.log(saludar("brandon"));

const suma = (a,b) => a + b;
console.log(suma(3,2));

const areaTriangulo = (base,altura) => base * altura;
console.log(areaTriangulo(23,56));

const esPar = (num) =>{
    if(num %2 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(esPar(3));

const temperatura = (celsius) => celsius * 9 / 5 + 32;
console.log(temperatura(21));

const numMayor = (num1, num2) =>{
    if (num1 > num2) {
        return "el mayor es: " + num1;
    } else {
        return "el mayor es:" + num2;
    }
}
console.log(numMayor(70,1));

const calcularIVA = (numero) => numero * 0.05 + numero;
console.log(calcularIVA(60));

const mayoriaEdad = (edad) =>{
     if (edad > 18) {
        return "eres mayor de edad";
    } else {
        return "eres menor de edad";
    }
}
console.log(mayoriaEdad(12));