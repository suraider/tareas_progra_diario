console.log("ejemplos de metodos");
console.log("METODOS PARA AGREGAR O ELIMINAR ELEMENTOS:");
let frutas = ["manzana", "banana"];

console.log(frutas);
console.log("push");
frutas.push("naranja");
console.log(frutas);

frutas.pop();
console.log("pop");
console.log(frutas);

console.log("unshift");
frutas.unshift("pera");
console.log(frutas);

console.log("shift");
frutas.shift();
console.log(frutas);



console.log("METODOS DE TRANSFORMACION");
const numeros = [1,2,3,4,5];
console.log(numeros);

console.log("map duplicados");
const duplicados = numeros.map (numeros => numeros * 2);
console.log(duplicados);

console.log("filtrer mayor Que Tres");
const mayorQueTres = numeros.filter(numeros => numeros > 3);
console.log(mayorQueTres);

console.log("slice");
const extrae = numeros.slice(1,4);
console.log(extrae);



console.log("METODOS DE BUSQUEDA Y VERIFICACION");
const lenguajes = ["HTML", "Css", "JavaScript"];
console.log(lenguajes);

console.log("find");
const encontrado = lenguajes.find(lenguajes => lenguajes.startsWith("Java"));
console.log(encontrado);

console.log("findIndex");
const cercano = lenguajes.findIndex(lenguajes => lenguajes === "JavaScript");
console.log(cercano);

console.log("includes");
const tieneCss = lenguajes.includes("Css");
console.log(tieneCss);



console.log("METODOS DE REDUCCION E ITERACION");
const precios = [10,20,30];
console.log(precios);

console.log("forEach");
precios.forEach((precio) => { console.log(precio); });

console.log("reduce");
const total = precios.reduce((acomulador,valorActual) => acomulador + valorActual, 0);
console.log(total);