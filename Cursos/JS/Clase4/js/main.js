/* Arrays o arreglos */
/* null - undefined */


var edad = 12;
var nombre = 'Smerdiakof';
var casado = false;
var telefono = 970317257;
var hijos = false;
/* var CuandoMurioMiBisAbue = undefined; */

/* var num40 = perro; */

var frutas = [
    'manzana',
    'pera',
    'naranja',
    'platano'
];
console.log(frutas);


frutas = [
'tora', 
'kiwi'
];
console.log(frutas);

/* frutas = ['toronja', 'kiwi'];
console.log(frutas); */

frutas[0] = 'toronja';
console.log(frutas);

frutas[2] = 'coco';
frutas[3] = 'piña';
console.log(frutas);


/* var edad = 12;
var nombre = 'Smerdiakof';
var casado = false;
var telefono = 970317257;
var hijos = false; */

/* var infoUser = ['edad 20' , 'nombre Nicky', 'casado false ', 'telefono 970317257', 'hijos false'];
console.log(infoUser); */

/* console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]); */

var index = 0

for (var  index = 0;  index <4; index ++ ) {
    console.log(frutas [index]); 
/*     index ++;   */
}

/* document.write(<br> smerdiakof'<br> smerdiakof' ); */


var imagenes = [
'img/D_NQ_NP_903721-MPE42393456388_062020-W.jpg',
'img/download.jpg',
'img/gorro-con-dobladillo-smLqcZ.jpg',
'img/images.jpg',
'img/one-gorro-mundial-1.jpg',
];

for (var index = 0; index < imagenes.length; index++ ){
    document.write('<img src="' + imagenes[index] +  '">');
}