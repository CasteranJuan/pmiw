let objJuego;
let imagen;  // La imagen del fondo de la intro
let escenario = [];  // Array para almacenar los fondos
let escenas = [0, 1, 2, 3];  // Array para almacenar las escenas (inicialmente en la intro)

function preload() {
  imagen = loadImage("data/intro.gif");  // Carga la imagen de la intro
}

function setup() {
  createCanvas(640, 480);
  textAlign(CENTER, CENTER);
  objJuego = new Juego();  // Inicializa el objeto del juego
  ambiente = document.getElementById("ambiente");
  for (let j = 0; j < 3; j++) {
    let nombreimagen = "fondo" + j + ".gif";  // Genera el nombre de la imagen
    escenario[j] = loadImage("data/" + nombreimagen);  // Carga los fondos
  }
  ambiente=document.getElementById("ambiente");
}

function intro(imagen) {
  image(imagen, 0, 0);  // Dibuja la imagen de la intro
  rectMode(CENTER);
  fill(0);
  rect(320, 50, 400, 50);
  fill(255);
  text("LA PELEA CONTRA FREEZER", 320, 50);
  fill(50, 99, 99);
  rect(120, 320, 150, 50);
  fill(255);
  textSize(28);
  text("PELEAR", 120, 320);
  fill(9, 139, 0);
  rect(85, 375, 78, 40);
  fill(0);
  text("play", 85, 375);
  fill(139, 0, 0);
  rect(85, 430, 78, 40);
  fill(0);
  text("stop", 85, 430);
}

function game() {
  objJuego.ejecutar();
  image(imagen, 0, 0)
  fill(0);
  rect(320, 50, 230, 50);
  fill(255);
  text(texto, 320, 50)
}

function perdiste(texto) {
  image(escenario[3], 0, 0);
  text(texto, 320, 50);
}

function ganaste(texto) {
  image(escenario[2], 0, 0);
  text(texto, 320, 50);
}

function boton(x, y, ancho, alto, num) {
 if ( mouseX>x-ancho/2 && mouseX<x+ancho/2 &&
    mouseY>y-alto/2 && mouseY<y+alto/2 ) {
    for (let i = 0; i < 14; i++) {
      escenas[i] = 1;
      escenas[num] = 0;
    }
  }
}

function botonSonido(x, y, ancho, alto) {
  if (mouseX > x - ancho / 2 && mouseX < x + ancho / 2 &&
    mouseY > y - alto / 2 && mouseY < y + alto / 2) {
    return true;
  } else {
    return false;
  }
}

function draw() {
  background(0);

  // Asegúrate de que el índice de escenas sea correcto
  if (escenas[0] == 0) {
    intro(imagen);  // Llama a la función de la intro si estamos en la escena 0
  } else if (escenas[1] == 0) {
    game(); // Llama a la función de juego
  } else if (escenas[2] == 0) {
    ganaste("HAS VENCIDO A FREEZER");
  } else if (escenas[3] == 0) {
    perdiste("FREEZER TE HA VENCIDO");
  }
}

function mousePressed() {
  if (escenas[0] == 0) {
    boton(120, 320, 150, 50, 1);
    if (botonSonido(85, 375, 78, 40)) {
      ambiente.currentTime = 0;
      ambiente.play();
    } else if (botonSonido(85, 430, 78, 40)) {
      ambiente.pause();
    } 
  }
}
