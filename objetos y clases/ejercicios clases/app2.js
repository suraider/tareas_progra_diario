// ejercicio 1
class animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    respirar() {
        console.log(this.nombre + " esta respirando");
    }
}
class perro extends animal {
    super(nombre) {
        this.nombre = nombre;
    }
}
const miperro = new perro("leo")
miperro.respirar();

// ejercicio 2
class persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
class estudiante extends persona {
    constructor(nombre, edad, grado) {
        super(nombre, edad)
        this.grado = grado;
    }
}
const nuevoEstudiante = new estudiante("evelin", 12, "primaria");
console.log(nuevoEstudiante);

// ejercicio 3
class vehiculo {
    constructor(marca) {
        this.marca = marca;
    }
    arrancar() {
        console.log(this.marca + " si arranca");
    }
}
class carro extends vehiculo {
    constructor(marca, puertas) {
        super(marca)
        this.puertas = puertas;
    }
}
const nuevoCarro = new carro("Nissan", 4)
console.log(nuevoCarro);
nuevoCarro.arrancar();

// ejercicio 4
class empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    trabajar() {
        console.log(this.nombre + " si chambea");
    }
}
class profesor extends empleado {
    constructor(nombre, salario, materia) {
        super(nombre, salario)
        this.materia = materia;
    }
}
const nuevoProfesor = new profesor("hector", 1500, "ciencias")
console.log(nuevoProfesor);
nuevoProfesor.trabajar();

// ejercicio 5
class Animal {
    hacerSonido() {
        console.log("Sonido de animal");
    }
}

class Gato extends Animal {
    hacerSonido() {
        console.log("Miau");
    }
}

const miAnimal = new Animal();
const miGato2 = new Gato();

miAnimal.hacerSonido();
miGato2.hacerSonido();

// ejercicio 6
class dispositivo {
    constructor(marca) {
        this.marca = marca;
    }
    encender() {
        console.log(this.marca + " si enciende :v");
    }
}
class celular extends dispositivo {
    constructor(marca, modelo) {
        super(marca)
        this.modelo = modelo;
    }
}
const celularNokia = new celular("nokia", 2007)
const celularSamasong = new celular("samasong s22", 2021)
console.log(celularNokia);
celularNokia.encender();
console.log(celularSamasong);
celularSamasong.encender();

// ejercicio 7
class figura {
    descripcion() {
        console.log("Soy una figura geométrica");
    }
}
class rectangulo extends figura {
    constructor(base, altura) {
        super()
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        console.log(this.base * this.altura);
    }
}
const nuevaFigura = new rectangulo(12, 23)
nuevaFigura.descripcion();
nuevaFigura.calcularArea();

// ejercicio 8
class personaje{
    constructor(nombre,vida){
this.nombre = nombre;
this.vida = vida;
    }
    presentarse(){
console.log("hola soy: " + this.nombre);
    }
}
class guerrero extends personaje{
    constructor(nombre, vida, arma){
        super(nombre, vida)
        this.arma  = arma;
    }
    atacar(){
        console.log("usaras el " + this.arma);
    }
}
const nuevoPersonaje = new guerrero("goku chiquito", 1200, "fierro golpeador de parejas felices")
nuevoPersonaje.presentarse();
nuevoPersonaje.atacar();

// ejercico 9
class computadora {
    constructor(marca, ram){
        this.marca = marca;
        this.ram = ram;
    }
    mostrarInformacion(){
        console.log("a");
    }
}
class laptop extends computadora{
    constructor(marca, ram, peso){
        super(marca, ram)
        this.peso = peso;
    }
    mostrarInformacion(){
        console.log("el peso es " + this.peso);
    }
}
const nuevaLaptop = new laptop("dell", 239, 21)
console.log(nuevaLaptop);
nuevaLaptop.mostrarInformacion();

// ejercicio 10
class persona2{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse(){
        console.log("hola");
    }
}

class estudiante2 extends persona2{
    constructor(nombre, edad, grado){
        super(nombre, edad)
        this.grado = grado;
    }
    presentarse(){
        console.log("hola soy " + this.nombre);
    }
}

class profesor3 extends persona2{
    constructor(nombre, edad, materia){
super(nombre, edad)
this.materia = materia;
    }
    presentarse(){
        console.log("hola mi nombre es " + this.nombre);
    }
}
const nuevoEstudiante2 = new estudiante2("jose", 22, "universidad")
const nuevoProfesor2 = new profesor3("leo", 21, "ninguna")
console.log(nuevoEstudiante2);
nuevoEstudiante2.presentarse();
console.log(nuevoProfesor2);
nuevoProfesor2.presentarse();