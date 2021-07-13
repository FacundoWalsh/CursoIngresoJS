/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precioUno;
var precioDos;
var precioTres;
var resultado;
//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres

function Sumar () 
{
   precioUno = document.getElementById("txtIdPrecioUno").value;
   precioDos = document.getElementById("txtIdPrecioDos").value;
   precioTres = document.getElementById("txtIdPrecioTres").value;
   
   
   precioUno = parseInt(precioUno);
   precioDos = parseInt(precioDos);
   precioTres = parseInt(precioTres);
 
   resultado = precioUno + precioDos + precioTres;

   alert(resultado);


    
	
}
function Promedio () 
{
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;
    
    
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    resultado = (precioUno + precioDos + precioTres)/3;

    alert(resultado);

	
}
function PrecioFinal () 
{
    var iva21;

    

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;
    
    
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    iva21 = (precioUno + precioDos + precioTres) * 21 / 100;

    resultado = precioUno + precioDos + precioTres + iva21;
    alert(resultado);


}