/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
	var descuento;
    var resultado;

	sueldo = document.getElementById("txtIdImporte").value;
	sueldo = parseInt(sueldo);

	porcentajeIngresado = prompt("Ingrese el porcentaje de descuento ");
	porcentajeIngresado = parseInt(porcentajeIngresado)
    descuento = sueldo * porcentajeIngresado/100;
	resultado = sueldo - descuento;

	document.getElementById("txtIdResultado").value = resultado;
}
