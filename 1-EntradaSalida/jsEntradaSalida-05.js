/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	

	var nombreIngresado;
	var edadIngresada;
	var textoConcatenado;


	nombreIngresado = document.getElementById("txtIdNombre").value;

	edadIngresada = document.getElementById("txtIdEdad").value;

	textoConcatenado = " usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años ";
	
	alert(textoConcatenado);
 }

//txtIdNombre
//txtIdEdad