Algoritmo numerosPositivos
	Definir num1, contador Como Entero
	contador <- 0
	Para i = 1 Hasta 10 Hacer
		Leer num1
		si num1 < 0 Entonces
			contador = contador + 1
		FinSi
	FinPara
	
	Escribir "tus numeros negativos son " contador
FinAlgoritmo
