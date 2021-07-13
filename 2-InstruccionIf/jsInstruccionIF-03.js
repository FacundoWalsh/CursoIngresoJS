//Alumno: Facundo Gian Walsh
//Ejercicio 3 IF
function mostrar() {

	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad >= 18) {
		alert("eres mayor de edad");
	}
	if (edad <= 17) {
		alert("eres menor de edad");
	}


}//FIN DE LA FUNCIÓN