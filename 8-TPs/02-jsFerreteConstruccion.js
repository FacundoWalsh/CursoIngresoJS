/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

    var largo;
    var ancho;
    var radio;
    var cantDeAlambre;

    //txtIdLargo
    //txtIdAncho
    //txtIdRadio


function Rectangulo () 
{
     largo = document.getElementById("txtIdLargo").value;
     ancho = document.getElementById("txtIdAncho").value;

     largo = parseInt(largo);
     ancho = parseInt(ancho);

     cantDeAlambre = (largo*2 + ancho*2) * 3;

     alert(cantDeAlambre);


}
function Circulo () 
{
    radio = document.getElementById("txtIdRadio").value;

    radio = parseInt(radio);

    cantDeAlambre = 2 * 3.1415 * radio;

    alert(cantDeAlambre);
	
}
function Materiales () 
{
    var cantidadDeCemento;
    var cantidadDeCal;
    var metrosCuadrados;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    metrosCuadrados = largo * ancho;

    cantidadDeCal = metrosCuadrados * 3;
    cantidadDeCemento = metrosCuadrados * 2;

    alert(" se necesitan " + cantidadDeCemento + " bolsas de cemento " + cantidadDeCal + " bolsas de cal ");


	
}