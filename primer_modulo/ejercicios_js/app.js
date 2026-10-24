let nombre = "Brandon";

// let edad = 18;

let pais = "Guatemala";

let altura = "1.64 mts";

let esEstudiante = true;

let colorFavorito = "naranja rojizo";

let numeroFavorito = 113;

let precioProducto = 9;

let correo = "pepitoElCrack11@gmail.com";

let telefono = 502;



// tipos de datos

const numeroEntero = 2;

const numeroDecimal = 2.2;

const cadena = "hello";

const aguaFria = true;

const aguaFria2 = false;

const elAguaMoja = null;

const frutas = ["melon", "manzana", "uva", "naranja", "mango"]

const datosPersonales = { nameUser: "brandon", edadUser: "18" }

let number1 = BigInt("57678");



// Mostrar en la consola del navegador 
console.log("HOLA MUNDO");

console.log("Brandon");

console.log(18);

console.log(10 + 20);

console.log(frutas);

console.log(datosPersonales, frutas);

console.log('comillasSimples');

console.log("comillasDobles");

console.log("pepitoElCrack " + 11);

console.log(4 * 6);



// Operadores de comparación 
console.log(10 == 10);

console.log("10" == 10);

console.log("10" === 10);

console.log(20 > 15);

console.log(5 < 3);

console.log(7 != 9);

console.log(8 >= 8);

console.log(4 <= 2);

console.log("hola" != "Hola");

console.log(true == 1);



// Operadores lógicos 
let edad = 40;
let Estudiante = true
console.log(edad > 18 && Estudiante == true);

let licencia = true;
console.log(licencia == true);

let valor1 = true
console.log(!valor1);

let number = 10;
console.log(number > 10 || number < 20);

let number2 = 4;
console.log(number2 < 0 || number2 > 100);

let user = true;
let userPassword = true;
console.log(user == true && userPassword == true);

let frio = true;
let lloviendo = false;
console.log(frio == true || lloviendo == true);

let hombre = true;
let mujer = false
console.log(hombre == mujer);

let numberPar = 4;
console.log(numberPar % 2 && numberPar > 0);

let valorContrario = false;
console.log(!valorContrario);



// TYPEOF
let numberType = 3;
console.log(typeof numberType);

let stringType = "hello"
console.log(typeof stringType);

let booleanType = true;
console.log(typeof booleanType);

let nullType = null;
console.log(nullType);

let undefinedType = undefined;
console.log(typeof undefinedType);



// if y else
let edad2 = 21;
if (edad2 > 18) {
    console.log("Mayor de edad");
} else {
    console.log("menor de edad");
}

let numberPositivo = 45;
if (numberPositivo > -1) {
    console.log("positivo");
} else {
    console.log("negativo");
}

let nota = 59;
if (nota > 60) {
    console.log("aprobado");
} else {
    console.log("reprobado");
}

let contraseñaCorrecta = "hola";
if (contraseñaCorrecta === contraseñaCorrecta) {
    console.log("Acceso permitido");
} else {
    console.log("Acceso denegado");
}

let numeroPar = 2;
if (numeroPar % 2 === 0) {
    console.log("es par");
} else {
    console.log("no es par");
}



// if aninados
let persona = 19;
let licenciaVefificar = true;
if (persona > 18) {
    if (licenciaVefificar === licenciaVefificar) {
        console.log("si tiene licencia");
    }
} else {
    console.log("no es valido");
}

let EstudianteAprobado = true;
let notaEstudiante = 91;
if (EstudianteAprobado === true) {
    if (notaEstudiante > 90) {
        console.log("Exelente");
    }
}

let numeroPositivo = 89;
if (numeroPositivo > 0) {
    if (numeroPositivo % 2 === 0) {
        console.log("es positivo y es par");
    } else {
        console.log("es positivo, pero no par");
    }
}

let inicioSesion = true;
let verificarAdministrador = true;
if (inicioSesion === true) {
    if (verificarAdministrador === true) {
        console.log("si eres administrador");
    } else {
        console.log("vete xdddddd");
    }
}

let compra = 600;
let cuponVerificar = true
if (compra > 500) {
    if (cuponVerificar === true) {
        console.log("si supera los Q500 y tiene cupon de descuento");
    } else {
        console.log("si supera los Q500 pero no aplica cupon");
    }
}


// while
let contador1 = 1;
while (contador1 < 11) {
    console.log(contador1);
    contador1++;
}

let contador2 = 11;
while (contador2 > 1) {
    console.log(contador2);
    contador2--;
}

let contador3 = 0;
while (contador3 < 20) {
    contador3++;
    if (contador3 % 2 === 0) {
        console.log(contador3);
    }
}

let total = 0;
let count = 1;
while(count <= 10){
    total+= count;
    count+= 1;
}
console.log(total)

let tabla = 0;
let multiplicador = 5;
while (tabla <= 9) {
    tabla++;
    console.log(tabla, "*", multiplicador, "=", tabla * multiplicador);
}



// while con break
let inicio = 0;
while (inicio < 20) {
    inicio++
    if (inicio === 10) {
        break;
    }
    console.log(inicio);
}

let inicio2 = 50;
while (inicio2 < 100) {
    inicio2++
    if (inicio2 === 75) {
        break;
    }
    console.log(inicio2);
}

let numeroPar2 = 0;
while (numeroPar2 < 50) {
    numeroPar2++
    if (numeroPar2 % 2 === 0) {
        if (numeroPar2 === 20) {
            break;
        }
        console.log(numeroPar2);
    }
}

let numeroInicial = 0;
while (numeroInicial < 30) {
    numeroInicial++
    if (numeroInicial === 15) {
        break;
    }
    console.log(numeroInicial);
}



// while con continue
let numeros = 0;
while (numeros < 20) {
    numeros++;
    if (numeros === 10) {
        continue;
    }
    console.log(numeros);
}

let numeros2 = 0;
while (numeros2 < 30) {
    numeros2++;
    if (numeros2 % 3 === 0) {
        continue;
    }
    console.log(numeros2);
}

let numeros3 = 0;
while (numeros3 < 20) {
    numeros3++;
    if (numeros3 % 2 === 0) {
        console.log(numeros3);
    } else {
        continue;
    }
}

let numeros4 = 0;
while (numeros4 < 16) {
    numeros4++;
    if (numeros4 === 8) {
        continue;
    }
    console.log(numeros4);
}

let numeros5 = 0;
while (numeros5 < 50) {
    numeros5++;
    if (numeros5 % 5 === 0) {
        continue;
    }
    console.log(numeros5);
}


// while anidados
let tablaMultiplicar = 0;
while (tablaMultiplicar < 3) {
    tablaMultiplicar++;
    let multiplicacion = 0;
    while (multiplicacion < 10) {
        multiplicacion++;
        console.log(tablaMultiplicar, "*", multiplicacion, "=", tablaMultiplicar * multiplicacion);
    }
}

let filas = 1;
let general = "*";
while (filas < 5) {
    general = general + "*";
    filas++;
    let columnas = 0;
    if (filas === 5) {
        while (columnas < 5) {
            columnas++;
            console.log(general);
        }
    }
}

let filas2 = 1;
let general2 = "*";
while (filas2 < 6) {
    console.log(general2);
    general2 = general2 + "*";
    filas2++;
}

let filas3 = 0;
while (filas3 <= 3) {
    filas++;
    let columnas3 = 0;
    while (columnas3 < 3) {
    }
}

let bucleExterior = 1;
while (bucleExterior <= 3) {
    let bucleinterior = 1;
    while (bucleinterior <= 3) {
        console.log("fila :", bucleExterior, "columna: ", bucleinterior);
        bucleinterior++;
    }
    bucleExterior++;
}

let tabla2 = 0;
while (tabla2 < 5) {
    tabla2++;
    let multi2 = 0;
    while (multi2 < 10) {
        multi2++;
        console.log(tabla2, "*", multi2, "=", tabla2 * multi2);
    }
}