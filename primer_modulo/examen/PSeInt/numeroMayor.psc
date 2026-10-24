Algoritmo numeroMayor
	Definir num1, num2, num3 Como Entero
	
	Escribir "para averiguar el mayor de 3 numeros"
	Escribir "ingresa un numero"
	Leer num1
	
	Escribir "ingresa el segundo numero numero"
	Leer num2
	
	Escribir "ingresa el tercer numero"
	Leer num3
	
	si num1 > num2 Entonces
		Escribir "el primer numero es el mayor"
		
	SiNo si num2 > num3 Entonces
			escribir"el segundo numero es el mayor"
			
		SiNo si num3 > num2 Entonces
				Escribir "el tercer numero es el mayor"
				
			sino si num1 < num2 Entonces
					Escribir "el segundo numero es el mayor"
					
				SiNo si num2 < num3 Entonces
						escribir"el tercer numero es el mayor"
						
					SiNo si num3 < num2 Entonces
							Escribir "el segundo numero es el mayor"
						FinSi
					FinSi
				FinSi
			FinSi
			
		FinSi
	FinSi
	
FinAlgoritmo
