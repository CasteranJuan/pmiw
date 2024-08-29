//pwim tp1
//Juan Casteran comision 2 93060/3

let imagen;
let ancho;
let cantidad;
let CANTIDAD;
let alto;
let mitadANCHO = 330; // mitad pantalla
let mitadALTO = 100; // mitad pantalla
let px, py, anch, alt; // botón rojo para desaparecer cuadrados
let PX, PY, ANCH, ALTO; // botón verde para aparecer cuadrados
let Px, Py, ANch, ALto; // botón de color aleatorio para cambiar el color de los cuadrados
let r, g, b; // colores del botón de cambio de color
let rojo; // variable para que el cambio de color sea posible
let verde; // variable para que el cambio de color sea posible
let azul; // variable para que el cambio de color sea posible

function preload(){
 imagen = loadImage("ilusion.jpg"); 
}
function setup() {
  createCanvas(800, 400);
  cantidad = 7;
  CANTIDAD = 10;
  ancho = 35;
  alto = 43;
  px = 765;
  py = 365;
  anch = 30;
  alt = 30;
  PX = 5;
  PY = 365;
  ANCH = 30;
  ALTO = 30;  Px = 387;
  Py = 365;
  ANch = 30;
  ALto = 30;
  r = random(255);
  g = random(255);
  b = random(255);
  rojo = 255;
  verde = 255;
  azul = 255;
}

function draw() {
  background(0);
  fill(255, 0, 0);
  image(imagen, 0, 0, 400, 400);
  for (let a = 1; a < cantidad; a++) { // for para los bloques
    for (let b = 0; b < CANTIDAD; b++) {
      fill(rojo, verde, azul);
      rect(mitadANCHO + a * 70, b * 85 - mitadALTO, ancho, alto);
      rect((mitadANCHO + a * 70) + 10, (b * 85 - mitadALTO) + alto, ancho, alto);
    }
  }
  fill(255, 0, 0);
  stroke(173, 173, 173);
  strokeWeight(2); // líneas
  line(400, 28, 800, 28);
  line(400, 70, 800, 70);
  line(400, 70 + 43, 800, 70 + 43);
 line(400, 70 + 43 * 2, 800, 70 + 43 * 2);
  line(400, 70 + 43 * 3, 800, 70 + 43 * 3);
  line(400, 70 + 43 * 4 - 1, 800, 70 + 43 * 4 - 1);
  line(400, 70 + 43 * 5 - 1, 800, 70 + 43 * 5 - 1);
  line(400, 70 + 43 * 6 - 2, 800, 70 + 43 * 6 - 2);
  line(400, 70 + 43 * 7 - 3, 800, 70 + 43 * 7 - 3);
  strokeWeight(1);

  fill(255, 0, 0);
  rect(px, py, anch, alt); // botón rojo
  fill(0, 255, 0);
  rect(PX, PY, ANCH, ALTO); // botón verde
  fill(r, g, b);
  rect(Px, Py, ANch, ALto); // botón de color aleatorio
}
function mousePressed() {
  if (mouseX > px && mouseX < px + anch && mouseY > py && mouseY < py + alt) { 
    sacarCuadrados();
    rojo = 255;
    verde = 255;
    azul = 255;
  } else if (mouseX > PX && mouseX < PX + ANCH && mouseY > PY && mouseY < PY + ALTO) {
    ponerCuadrados();
  } else if (mouseX > Px && mouseX < Px + ANch && mouseY > Py && mouseY < Py + ALto) {
    cambiarColor();
  }
}

function sacarCuadrados() {
  cantidad = 0;
  CANTIDAD = 0
}
function devolverColor() {
}

function ponerCuadrados() {
  cantidad=7;
  CANTIDAD=10;

}
function cambiarColor() {
  rojo=random(255);
  verde=random(255);
  azul=random(255);
}
