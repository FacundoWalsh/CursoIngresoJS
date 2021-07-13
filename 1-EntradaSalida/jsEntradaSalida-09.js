/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
//txtIdSueldo
	 var sueldo;
     var aumento;
	 var porcentajeDeAumento;
	 var resultado;

	 sueldo = document.getElementById("txtIdSueldo").value;
	 sueldo = parseInt(sueldo);
	 porcentajeDeAumento = prompt("Ingrese el Porcentaje de Aumento ");
	 porcentajeDeAumento = parseInt(porcentajeDeAumento);
     aumento = sueldo * porcentajeDeAumento/100;
	 resultado = sueldo + aumento;

    document.getElementById("txtIdResultado").value = resultado;

}
