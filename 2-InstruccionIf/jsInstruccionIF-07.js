//Alumno: Facundo Gian Walsh
//Ejercicio 7 IF
function mostrar()
{
	var edad;
	var estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;
	edad = parseInt(edad);

	if(edad<18 && estadoCivil != "Soltero") {
		alert("Es muy pequeño para NO ser soltero");

	}
	


}//FIN DE LA FUNCIÓN