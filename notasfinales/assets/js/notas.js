var nombre = prompt("Ingres tu nombre:", "");
var carrera = prompt("Carrera:", "Desarrollador Front End");
var ramo1 = prompt("Ingrese ramo 1:", "");
var nota1 = prompt("Ingrese nota 1 [" + ramo1 + "]:", 7);
var nota2 = prompt("Ingrese nota 2 [" + ramo1 + "]:", 7);
var nota3 = prompt("Ingrese nota 3 [" + ramo1 + "]:", 7);
var promedioramo1 = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3
var ramo2 = prompt("Ingrese ramo 2:", "");
var nota12 = prompt("Ingrese nota 1 [" + ramo2 + "]:", 7);
var nota22 = prompt("Ingrese nota 2 [" + ramo2 + "]:", 7);
var nota32 = prompt("Ingrese nota 3 [" + ramo2 + "]:", 7);
var promedioramo2 = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3
var ramo3 = prompt("Ingrese ramo 3:", "JavaScript");
var nota13 = prompt("Ingrese nota 1 [" + ramo3 + "]:", 7);
var nota23 = prompt("Ingrese nota 2 [" + ramo3 + "]:", 7);

var aprobacion = prompt("Ingrese nota de aprobación:", 4);
var promedioramo3 = ((parseFloat(aprobacion) - ((parseFloat(nota13) + parseFloat(nota23)) / 3)) * 100) / (100 / 3);

//

document.write("<div class='container'>");
document.write("<img src='https://desafiolatam.com/assets/home/logo-academia-bla-790873cdf66b0e681dfbe640ace8a602f5330bec301c409744c358330e823ae3.png' style='float:right'>");
document.write("<h1 class='py-2'>Notas finales</h1>");
document.write("<dl class='row'>");
document.write("<dt class='col-sm-3'>Nombre:</dt><dd class='col-sm-9'>" + nombre + "</dd>");
document.write("<dt class='col-sm-3'>Carrera:</dt><dd class='col-sm-9'>" + carrera + "</dd></dl>");
document.write("<table class='table'>");
document.write("<thead class='thead-dark'>");
document.write("<tr>");
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("</tr>");
document.write("</thead>");
document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>" + ramo1 + "</th>");
document.write("<th scope='row'>" + nota1 + "</th>");
document.write("<th scope='row'>" + nota2 + "</th>");
document.write("<th scope='row'>" + nota3 + "</th>");
document.write("<th scope='row'>" + promedioramo1.toFixed(2) + "</th>");
document.write("</tr>");
document.write("<tr>");
document.write("<th scope='row'>" + ramo2 + "</th>");
document.write("<th scope='row'>" + nota12 + "</th>");
document.write("<th scope='row'>" + nota22 + "</th>");
document.write("<th scope='row'>" + nota32 + "</th>");
document.write("<th scope='row'>" + promedioramo2.toFixed(2) + "</th>");
document.write("</tr>");
document.write("<tr>");
document.write("<th scope='row'>" + ramo3 + "</th>");
document.write("<th scope='row'>" + nota13 + "</th>");
document.write("<th scope='row'>" + nota23 + "</th>");
document.write("<th scope='row'> - </th>");
document.write("<th scope='row'> - </th>");
document.write("</tr>");
document.write("</tbody>");
document.write("</table>");
document.write("<p>Para que puedas aprobar el ramo de " + ramo3 + " con una nota minima de  " + aprobacion + ", necesitas obtener un " + promedioramo3.toFixed(2) + " en la nota 3 del ramo");
document.write("</div>");