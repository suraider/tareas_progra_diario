// ejercicio !
console.log("METODO FOR");
console.log("Crea un array con 5 nombres e imprime cada nombre utilizando for.");
let nombres = ["Ana", "Luis", "Carlos", "María", "Pedro"];
for (let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}

// ejercicio 2
console.log("Crea un array con 5 números e imprime cada número multiplicado por 2.");
let numeros = [2, 4, 6, 8, 10];
for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i] * 2);
}

// ejercicio 3
console.log("Crea un array con 5 frutas y muestra solamente las frutas que están en las posiciones pares (0, 2, 4).");
let frutas = ["Manzana", "Pera", "Uva", "Mango", "Banano"];
for (let i = 0; i < frutas.length; i++){
    if(i %2 === 0){
        console.log(frutas[i]);
    }
}

console.log("METODO WHILE");
// ejercicio 1
console.log("Recorre un array de nombres utilizando while e imprime cada nombre.");
let nombre = ["Ana", "Luis", "Pedro", "Sofía"];
let i = 0;
while( i < nombre.length){
    console.log(nombre[i]);
    i++;
}

// ejercicio 2
console.log("Recorre el siguiente array e imprime solamente los números mayores que 5.");
let numerosMayores = [2, 8, 4, 10, 3, 7];
let j = 0;
while( j < numerosMayores.length){
    j++;
    if( numerosMayores[j] > 5){
         
        console.log(numerosMayores[j]);
    }
}

// ejercicio 3
console.log("Recorre un array de frutas y cuenta cuántas frutas contiene.");
let frutasCuenta = ["Manzana", "Pera", "Uva", "Mango", "Banano"];
let g = 0;

while(g < frutasCuenta.length){
    console.log(frutasCuenta[g]);
    g++;
}
console.log("la cantidad frutas son " + g);



console.log("FOR OF");
// ejercicio 1
console.log("Imprime todos los nombres del array.");
let nombres2 = ["Juan", "Ana", "Luis", "Pedro"];
for(nombresNuevo of nombres2){
    console.log(nombresNuevo);
}

// ejercicio 2
console.log("Imprime solamente los números pares.");
let numeros3 = [1, 2, 3, 4, 5, 6, 7, 8];
for(numerosNuevo of numeros3){
    if(numerosNuevo %2 === 0){
        console.log(numerosNuevo);
    }
}

// ejercicio 3
console.log("Recorre el array y muestra un mensaje para cada fruta");
let frutas2 = ["Manzana", "Pera", "Uva", "Sandia"];
for(frutasNuevo of frutas2 ){
    console.log("Me gusta la " + frutasNuevo);
}


console.log("FOR EACH");
// ejercicio 1
console.log("Imprime todos los nombres");
let nombres3 = ["Ana", "Luis", "Carlos", "María"];
nombres3.forEach((nombre) =>{
    console.log(nombre);
}
)


// ejercicio 2
console.log("Imprime cada número multiplicado por 3.");
let numerosEach = [1, 2, 3, 4, 5];
for (let i = 0; i < numerosEach.length; i++){
}
numerosEach.forEach((numerosEach) =>{
     console.log(numerosEach * 3);
 }
)



console.log("BUSCAR EN ARRAYS");
// ejercicio 1
console.log("indexof()");
let nombresIndex = ["Ana", "Luis", "Pedro", "María"];
const buscarNombre = nombresIndex.indexOf("Pedro")
console.log(buscarNombre);


console.log("Encuentra la posición del número 30.");
let numeros4 = [10, 20, 30, 40, 50];
const buscarNumero = numeros4.indexOf(30);
console.log(buscarNumero);


console.log("Busca Mango y muestra su posición.");
let frutas3 = ["Manzana", "Pera", "Mango", "Uva"];
const buscarFrutas = frutas3.indexOf("Mango");
console.log(buscarFrutas);



console.log("INCLUDES()");
let frutas5 = ["Manzana", "Pera", "Uva"];
const frutasInclude = frutas5.includes("Manzana");
console.log(frutasInclude);

// ejercicio 2
console.log("ejercicio 2");
let numeros5 = [5, 10, 15, 20];
const buscarNum = numeros5.includes(10);
console.log(buscarNum);

// ejercicio 3
console.log("ejercicio 3");
let nombres5 = ["Ana", "Luis", "Carlos"];
const buscarNombres = nombres5.includes("Ana");
console.log(buscarNombres);


console.log("SOME");
// ejercicio 1
console.log("ejercicio 1");
let numeros7 = [2, 5, 8, 15, 3];
const buscarNumero1 = numeros7.some(numeros7 => numeros7 === 5);
console.log(buscarNumero1);

// ejercicio 2
console.log("ejercicio 2");
let numeros8 = [1, 3, 5, 8, 9];
const buscarNumero2 = numeros8.some(numeros8 => numeros8 === 3);
console.log(buscarNumero2);

// ejercicio 3
console.log("ejercicio 3");
let nombres6 = ["Luis", "Pedro", "Ana", "Carlos"];
const buscarNombre1 = nombres6.some(nombres6 => nombres6 === "Pedro");
console.log(buscarNombre1);


console.log("EVERY");
// EJERCICIO 1
console.log("¿Todos los números son mayores que 0?");
let numeros9 = [2, 5, 8, 10];
const mayor = numeros9.every( numeros9 => numeros9 > 0);
console.log(mayor);

// ejercicio 2
console.log("¿Todos los números son pares?");
let numeros0 = [2, 4, 6, 8];
const par = numeros0.every(numeros0 => numeros0 %2 === 0);
console.log(par);

// ejercicio 3
console.log("¿Todos los nombres tienen más de 3 letras?");
let nombres10 = ["Carlos", "Pedro", "Luis", "Ana"];
const mas = nombres10.every(nameSearch => nameSearch.length > 3);
console.log(mas);

console.log("FIND");
// ejercicio 1
console.log("Encuentra el primer número mayor que 10.");
let numeros11 = [3, 8, 15, 20, 25];
let encuentraNumero = numeros11.find(encuentraNum => encuentraNum > 10);
console.log(encuentraNumero);

// ejercicio 2
console.log("Encuentra el primer número par.");
let numeros12 = [1, 3, 7, 8, 10];
let EncuentraPar = numeros12.find(funcNumPar => funcNumPar % 2 == 0);
console.log(EncuentraPar);

// ejercicio 3
console.log("Encuentra el primer nombre que tenga más de 5 letras.");
let nombres13 = ["Ana", "Luis", "Carlos", "Pedro"];
let encuentraNombre = nombres13.find(letras => letras.length > 5);
console.log(encuentraNombre);

console.log("FINDINDEX()");
// ejercicio 1
console.log("Encuentra la posición del primer número mayor que 10.");
let numeros13 = [3, 5, 12, 20, 25];
const mayor10 = numeros13.findIndex(mayor10 => mayor10 > 10);
console.log(mayor10);

// ejercicio 2
console.log("Encuentra la posición del primer número par.");
let numeros14 = [1, 3, 7, 8, 10];
const primerNum2 = numeros14.findIndex(primerNum2 => primerNum2 %2 === 0);
console.log(primerNum2);

// ejercicio 3
console.log("Encuentra la posición del primer nombre que tenga más de 4 letras.");
let nombres15 = ["Ana", "Luis", "Carlos", "José"];
const primer4Letras = nombres15.findIndex(primer4Letras => primer4Letras.length > 4);
console.log(primer4Letras);