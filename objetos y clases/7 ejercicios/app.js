// ejercicio 1
const persona = {
    nombre : "dani",
    edad : 3,
    ciudad : "nueva delhi"
}

console.log(persona);

// ejercicio 2
const estudiante = {
    nombre : "harman",
    grado : "sexto primaria",
    nota : -21
}

console.log(estudiante.nombre);

// ejercicio 3
const carro = {
    marca : "honda",
    color : "rojo"
}
console.log(carro);
carro.color = "verde"
console.log(carro);

// ejercicio 4
const animal = {
    nombre : "lolo",
    tipo : "jugueton"
}
console.log(animal);
animal.edad = 2
console.log(animal);

// ejercicio 5
const producto = {
    nombre: "CN",
    precio: 23,
    marca: "wa"
}

delete producto.marca
console.log(producto);

// ejercicio 6
const persona2 ={
nombre : "annie",
saludo : function(){
    console.log("hola soy " + this.nombre);
}
}
persona2.saludo()

// ejercicio 7
const calculadora ={
    num1 : 1,
    num2 : 2,
    suma : function(){
        console.log(this.num1 + this.num2);
    }
}
calculadora.suma()

// ejercicio 8
const estudiante2 = {
nombre: "elwaza",
edad: 800,
grado: "no tiene"
}

for(propiedad in estudiante2){
    console.log(propiedad + " "+  estudiante2[propiedad]);
}