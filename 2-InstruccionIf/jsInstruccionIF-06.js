//Alumno: Facundo Gian Walsh
//Ejercicio 6 IF
function mostrar()
{

	var edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad>=18){
		alert("usted es mayor de edad");
	}
	if(edad>=13 && edad<=17){
		alert("usted es adoloscente");
	}
	if(edad<13){
		alert("usted es un niño");
	}



}//FIN DE LA FUNCIÓN