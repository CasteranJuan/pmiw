//TP#Final — Aventura Gráfica Interactiva Web [1
//https://youtu.be/W06oVCcOusM
//Alan Giammarco 92814/9
//Juan Casteran 93060/3
//EL AUDIO TARDA UN CACHITO EN ARRANCAR!!!!!!!

let imagen;
let ambiente;
let escenas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let escenario = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function preload() {
  imagen = loadImage("intro.gif");
}

function setup() {
  createCanvas(640, 480);
  textAlign(CENTER, CENTER);
  for (let j = 0; j < 14; j++) {
    let nombreimagen = "escenario" + j + ".gif";
    escenario[j] = loadImage(nombreimagen);
  }
  ambiente=document.getElementById("ambiente");
}

function intro(imagen) {
  image(imagen, 0, 0);
  rectMode(CENTER);
  fill(255, 218, 5);
  rect(320, 420, 180, 80);
  fill(0);
  textSize(28);
  text("COMENZAR", 320, 420);
  fill(9, 139, 0);
  rect(100, 420, 75, 60);
  fill(0);
  text("play", 100, 420);
  fill(139, 0, 0);
  rect(550, 420, 75, 60);
  fill(0);
  text("stop", 550, 420);
}

function pantalla(texto, imagen) {
  image(imagen, 0, 0);
  textSize(30);
  fill(0, 168, 255);
  rect(320, 420, 620, 100);
  fill(255);
  text(texto, 320, 420);
  fill(20, 220, 50);
  rect(600, 340, 50, 50);
}


function pantallaDecision(texto, imagen) {
image(imagen, 0, 0);
  textSize(15);
  fill(0, 168, 255);
  rect(320, 420, 620, 100);
  fill(255);
  text(texto, 320, 420);

  fill(255, 0, 0);
  rect(550, 340, 150, 50);
  fill(255);
  text("Seguir historia original", 549 + 1, 340 + 1);

  fill(0, 0, 255);
  rect(550, 240, 150, 50);
  fill(255);
  text("Historia alternativa", 549 + 1, 240 + 1);
}

function pantallaFinal(texto, texto2, texto3) {
  textSize(20);
  fill(255);
  text(texto, 320, 130);
  text(texto2, 320, 150);
  text(texto3, 320, 170);
  rect(600, 340, 50, 50);
}



function boton(x, x2, y, y2, num) {
  if (mouseX > x && mouseX < x2 && mouseY > y && mouseY < y2) {
    for (let i = 0; i < 14; i++) {
      escenas[i] = 1;
      escenas[num] = 0;
    }
  }
}
function botonSonido( x, y, ancho, alto) {
  if ( mouseX>x-ancho/2 && mouseX<x+ancho/2 &&
    mouseY>y-alto/2 && mouseY<y+alto/2 ) {
    return true;
  } else {
    return false;
  }
}


function draw() {
  background(0);
  if (escenas[0] == 0) {

    intro(imagen);
  } else if (escenas[1] == 0) {

    pantalla("Los guerreros Z se encuentran con freezer.", escenario[0]);
  } else if (escenas[2] == 0) {
    pantallaDecision("Freezer ataca a Krillin.", escenario[1]);
  } else if (escenas[3] == 0) {
    pantalla("Goku se enoja y se transforma en SSJ.", escenario[2]);
  } else if (escenas[4] == 0) {
    pantallaDecision("Goku advierte a Gohan que escape.", escenario[3]);
  } else if (escenas[5] == 0) {
    pantalla("Goku se enfrenta a Freezer.", escenario[4]);
  } else if (escenas[6] == 0) {
    pantalla("Goku le gana a Freezer.", escenario[5]);
  } else if (escenas[7] == 0) {
    pantalla("Los guerreros Z logran salvar a Krillin.", escenario[6]);
  } else if (escenas[8] == 0) {
    pantalla("Freezer enojado muestra todo su poder.", escenario[7]);
  } else if (escenas[9] == 0) {
    pantalla("Freezer derrota a Vegeta y a Goku.", escenario[8]);
  } else if (escenas[10] == 0) {
    pantalla("Los guerreros Z mueren.", escenario[9]);
  } else if (escenas[11] == 0) {
    pantalla("Gohan no quiere irse.", escenario[10]);
  } else if (escenas[12] == 0) {
    pantalla("Freezer asesina a Gohan.", escenario[11]);
  } else if (escenas[13] == 0) {
    pantalla("Piccolo con un nuevo poder mata a Freezer.", escenario[12]);
  } else if (escenas[14] == 0) {
    pantallaFinal("Alan Giammarco 92814/9", "Juan Casteran 93060/3", "obra de Akira Toriyama");
  }
}

function mousePressed() {
  if (escenas[0] == 0) {
    boton(230, 410, 380, 460, 1);
    if (botonSonido(100, 420, 75, 60)){
      ambiente.currentTime=0;
      ambiente.play();
    } else if (botonSonido(550, 420, 75, 60)){
          ambiente.pause();
        }
  } else if (escenas[1] == 0) {
    boton(575, 625, 315, 365, 2);
  } else if (escenas[2] == 0) {
    boton(575, 625, 315, 365, 3);
    boton(575, 625, 215, 265, 7);
  } else if (escenas[3] == 0) {
    boton(575, 625, 315, 365, 4);
  } else if (escenas[4] == 0) {
    boton(575, 625, 315, 365, 5);
    boton(575, 625, 215, 265, 11);
  } else if (escenas[5] == 0) {
    boton(575, 625, 315, 365, 6);
  } else if (escenas[6] == 0) {
    boton(575, 625, 315, 365, 14);
  } else if (escenas[7] == 0) {
    boton(575, 625, 315, 365, 8);
  } else if (escenas[8] == 0) {
    boton(575, 625, 315, 365, 9);
  } else if (escenas[9] == 0) {
    boton(575, 625, 315, 365, 10);
  } else if (escenas[10] == 0) {
    boton(575, 625, 315, 365, 14);
  } else if (escenas[11] == 0) {
    boton(575, 625, 315, 365, 12);
  } else if (escenas[12] == 0) {
    boton(575, 625, 315, 365, 13);
  } else if (escenas[13] == 0) {
    boton(575, 625, 315, 365, 14);
  } else if (escenas[14] == 0) {
    boton(575, 625, 315, 365, 0)
  }
}
