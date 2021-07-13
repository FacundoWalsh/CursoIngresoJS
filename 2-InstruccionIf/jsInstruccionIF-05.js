//Alumno: Facundo Gian Walsh
//Ejercicio 5 IF
function mostrar()
{
	var edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad<13 || edad>17) {
		alert("usted no es adolescente");

	}

}//FIN DE LA FUNCIÓN