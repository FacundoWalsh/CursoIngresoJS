//Alumno: Facundo Gian Walsh
//Ejercicio 2 parcial 2019

function mostrar()
{
    var nombreUno;
    var nombreDos;
    var pesoUno;
    var pesoDos;
    var sumaDeLosPesos;
    var PromedioDeLosPesos;

    nombreUno=prompt("nombre persona 1 ");
    nombreDos=prompt("nombre persona 2 ");
  
    pesoUno=prompt("peso persona 1 ");
    pesoDos=prompt("peso persona 2 ");
    
    pesoUno=parseInt(pesoUno);
    pesoDos=parseInt(pesoDos);

    sumaDeLosPesos=pesoUno+pesoDos;
    PromedioDeLosPesos=(pesoUno+pesoUno)/2;

    alert("ustedes se llaman "+nombreUno+" y "+nombreDos+" y pesan "+pesoUno+" y ,"+pesoDos+" que sumados son "+sumaDeLosPesos+" el promedio de peso es "+PromedioDeLosPesos);



}
