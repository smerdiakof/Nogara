/* Operadores logicos || "OR" "o" */

/* var num1 = 873;
var num2 = 672;
var num3 = 42;
 */
/* if (num1 > num2 || num1 < num3) {
    console.log('ok'); 
} */


/* else if
 elsif  */

/* Solo puede entrar hombres mayores de edad con mas de 40 dolares. */

/* var generoCliente = 'H';
var dinero = 50;
var edad = 17;

var generocliente = prompt('ingrese su genero con H o M')
var dinero = prompt('ingrese la cantidad de dinero que tiene')
var edad = prompt('ingrese su edad')
if (generoCliente === 'H' ||generoCliente === 'h' ) {
if (dinero >=40) {
   if (edad >=18) {
       console.log('usted puede pasar');
       alert('usted puede pasar');
   }
  }
 } */

var aciertos = prompt('Escribir tu numero de aciertos');

aciertos = parseFloat (aciertos);

console.log(aciertos);

switch (aciertos){

    case 'c':
    console.log('ok');
    break;

    case 5:
    console.log('reprobaste');
    break;

    case 30: 
    console.log('Sacaste 6');
    break;

    case 40:
        console.log('Sacaste 8');
    break;

    default:
        console.log('intentalo otra vez');
        break;
}