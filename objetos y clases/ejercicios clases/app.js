// ejercicio 1
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
const persona1 = new Persona("Ana", 20)
console.log(persona1);

// ejercicio 2
class Perro {
    constructor(nombre, raza) {
        this.nombre = nombre;
        this.raza = raza;
    }
    ladrar() {
        console.log("¡Guau, guau!");
    }

}
const miPerro = new Perro("max", "golden")
console.log(miPerro);
miPerro.ladrar();


// ejercicio 3
class estudiante {
    constructor(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }
}
const nuevoEstudiante = new estudiante("carlos", 70)

nuevoEstudiante.nota = 90

console.log(nuevoEstudiante);


// ejercicio 4
class calculadora {
    constructor(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }


    suma() {
        return this.numero1 + this.numero2
    }
}
const calcular = new calculadora(10, 5)
console.log(calcular.suma());

// ejercicio 5
class carro {
    constructor(marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }

}
const carro1 = new carro("toyota", 2025, "gris")
const carro2 = new carro("nissan", 2009, "verde")

console.log(carro1);
console.log(carro2);

// ejercicio 6
class videojuego {
    constructor(nivel, nombre) {
        this.nombre = nombre;
        this.nivel = nivel;
    }
    subirNivel() {
        return ({ this: nombre }, this.nivel + this.nivel);
    }
}
const nuevoNivel = new videojuego(1, "nintendo")

console.log(nuevoNivel);

// ejercicio 7
class matematica {
    static duplicado(num) {
        return num * 2
    }
}
console.log(matematica.duplicado(2));

// ejercicio 8
class animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    respirar() {
        console.log(this.nombre + " esta vivo :v");
    }
}
class gato extends animal {
    constructor(nombre) {
        super(nombre)
    }

    maullar() {
        console.log(this.nombre + " si molesta");
    }
}
const miGato = new gato("michi")
miGato.respirar();
miGato.maullar();

// ejercico 9
class empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
}

class gerente extends empleado {
    constructor(nombre, salario, departamento) {
        super(nombre, salario)
        this.departamento = departamento;
    }

}
const gerente1 = new gerente("alex", 20000, "si")
console.log(gerente1);

// ejercicio 10
class Animal {
    hacerSonido() {
        console.log("Sonido de animal");
    }
}

class Perro2 extends Animal {
    hacerSonido() {
        console.log("Guau");
    }
}

class Gato extends Animal {
    hacerSonido() {
        console.log("Miau");
    }
}

const miAnimal = new Animal();
const miPerro2 = new Perro2();
const miGato2 = new Gato();

miAnimal.hacerSonido();
miPerro2.hacerSonido();
miGato2.hacerSonido();
