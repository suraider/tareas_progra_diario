// // ejercicio 1
// console.log("Duplicar números");
// const numeros = [2, 4, 6, 8, 10];
// const duplicados = numeros.map(numeros => numeros * 2
// )
// console.log(duplicados);

// // ejercicio 2
// console.log("Convertir nombres a mayúsculas");
// const nombres = ["ana", "pedro", "maria", "juan"];
// const Mayus = nombres.map(nombres => nombres.toUpperCase());
// console.log(Mayus);

// // ejercicio 3
// console.log("Agregar 5 puntos");
// const notas = [70, 80, 65, 90, 75];
// const agregar = notas.map(notas => notas + 5)
// console.log(agregar);

// // ejercicio 4
// console.log("Obtener cuadrados");
// const numeros2 = [1, 2, 3, 4, 5];
// const cuaddradoNum = numeros2.map(numeros2 => numeros2 * numeros2)
// console.log(cuaddradoNum);

// // ejercicio 5
// console.log("Crear mensajes");
// const nombres2 = ["Carlos", "Laura", "Pedro", "Sofia"];
// const crearNombres = nombres2.map(nombres2 => "Hola " + nombres2)
// console.log(crearNombres);

// // MATRICES
// console.log("-----------------------------------MATRICES-----------------------------------");
// // ejercicio 1
// console.log("Mostrar todos los elementos");
// const matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let i = 0; i < matriz.length; i++) {
//     for (let j = 0; j < matriz[i].length; j++) {
//         console.log(matriz[i][j]);
//     }
// }

// // ejercicio 2
// console.log("Sumar todos los elementos");
// const matriz2 = [
//     [2, 4],
//     [6, 8],
//     [10, 12]
// ];
// let conta = 0;
// for (let q = 0; q < matriz2.length; q++) {
//     for (let w = 0; w < matriz2[q].length; w++) {
//         conta = conta + matriz2[q][w];
//     }
// }
// console.log(conta);

// // ejercicio 3
// console.log("Encontrar el número mayor");
// const matriz3 = [
//     [15, 8, 20],
//     [7, 30, 12],
//     [18, 5, 25]
// ];

// numMayor = 0;
// for (let e = 0; e < matriz3.length; e++) {
//     for (let r = 0; r < matriz3[e].length; r++) {
//         if (matriz3[e][r] > numMayor) {
//             numMayor = matriz3[e][r]

//         }
//     }
// }
// console.log(numMayor);

// // ejercicio 4
// console.log("Contar números pares");
// const matriz4 = [
//     [2, 5, 8],
//     [10, 3, 7],
//     [4, 6, 9]
// ];
// let contadorPar = 0;
// for (let i2 = 0; i2 < matriz4.length; i2++) {
//     for (let j2 = 0; j2 < matriz4[i2].length; j2++) {
//         if (matriz4[i2][j2] % 2 === 0) {
//             contadorPar++;
//         }
//     }
// }
// console.log(contadorPar);

// // ejercicio 5
// console.log("Sumar cada fila");
// const matriz5 = [
//     [10, 20, 30],
//     [5, 15, 25],
//     [2, 4, 6]
// ];

// let sumarFilas = 0;
// for(let i3 = 0; i3 < matriz5.length; i3++){
//     for(j3 = 0; j3 < matriz5[i3].length; j3++){
//         if(j3 < 1){
//            sumarFilas = 0;
//         }
//         sumarFilas = sumarFilas + matriz5[i3][j3]
//     }
//     console.log(sumarFilas);
// }


// console.log("------------------------ALGORITMOS CON ARRAYS--------------------------");
// // ejercico 1
// console.log("Encontrar el mayor");
// const numeros3 = [12, 45, 7, 89, 23, 56];
// let mayor2 = numeros3[0];

// for (let i4 = 1; i4 < numeros3.length; i4++) {
//   if (numeros3[i4] > mayor2) {
//     mayor2 = numeros3[i4];
//   }
// }
// console.log(mayor2);


// // ejercicio 2
// console.log("encontrar el menor");
// const numeros4 = [34, 12, 56, 8, 91, 23];
// let menor2 = numeros4[0];

// for (let i5 = 1; i5 < numeros4.length; i5++) {
//   if (numeros4[i5] < menor2) {
//     menor2 = numeros4[i5];
//   }
// }
// console.log(menor2);


// // ejercicio 3
// console.log("Contar positivos y negativos");
// const numeros5 = [5, -2, 8, -10, 3, -4, 7];
// let numerosPositivos = 0;
// let numerosNegativos = 0;

// for(let i6 = 0; i6 < numeros5.length; i6++){
//    if(numeros5[i6] > 0){
//     numerosPositivos++;
//    }else{
//     numerosNegativos++;
//    }
// }
// console.log("numeros positivos: " + numerosPositivos);
// console.log("numeros negativos: " + numerosNegativos);


// // ejercico 4
// console.log("-----Invertir un array");
// const numeros6 = [1, 2, 3, 4, 5];
// reversa = numeros6.length

// while(reversa > 0){
//     reversa--
//     console.log(numeros6[reversa]);
// }

// // ejercicio 5
// console.log("Buscar un número");
// const numeros7 = [10, 25, 30, 45, 50];
// const buscar = 30;
// let numeroFinal = numeros7.length - 1;
// for(let i9 = 0; i9 < numeros7.length; i9++){
//     if( numeros7[i9] == buscar){
//         console.log("numero encontrado " + buscar);
//         break
//     }else if(i9 === numeroFinal && numeros7[i9] !== buscar){
//         console.log("numero no encontrado");

//     }
// }


