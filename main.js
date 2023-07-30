// Área del círculo =>  es PI por radioCirculoalcuadrado

const PI = 3.1416;

let areaCirculo;

let radio = 8;

areaCirculo = PI * (radio * radio);
//document.write(areaCirculo);
radio =20;

areaCirculo = PI * (radio * radio);
//document es el documento HTML al que está ligado el archivo.
// el operador . me permite acceder a propiedades o métodos(acciones) del elemento
// write es un método(función que le pertenece a alguien)
// document.write(areaCirculo);

/* const myModal = document.getElementById('modal-contactame');
const myElement = document.getElementById('contactame');

myModal.addEventListener('shown.bs.modal', () => {
    myElement.focus();
}); */


let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 65,
});

typewriter
// 1000 milisegundos es 1 segundo
  .pauseFor(500)
  .typeString('Ana Martínez')
  .pauseFor(1500)
  .deleteChars(20)
  
  .typeString('Estudiante en Ing. Mecatrónica')
  .pauseFor(500)
  .deleteChars(20)
  .start();
  


