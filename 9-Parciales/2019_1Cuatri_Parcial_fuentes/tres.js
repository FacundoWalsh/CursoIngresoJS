//Alumno: Facundo Gian Walsh
// Trabajo 03 parcial 2019

function mostrar()
{
    var precio;
    var porcentajeDeDescuento;
    var descuento;
    var precioFinal;

    precio=prompt("ingrese el precio");
    porcentajeDeDescuento=prompt("ingrese el descuento");

    precio=parseInt(precio);
    porcentajeDeDescuento=parseInt(porcentajeDeDescuento);

    descuento=precio*porcentajeDeDescuento/100;


    precioFinal=precio-descuento;

    document.getElementById("elPrecioFinal").value=precioFinal;


}
