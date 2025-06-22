
let cenario = "menu";
let somCampo, somCidade;

function preload() {
  somCampo = loadSound('sons/campo.mp3');
  somCidade = loadSound('sons/cidade.mp3');
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(200);
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(24);

  if (cenario == "menu") {
    text("Escolha o cenário:\nClique para Campo ou Cidade", width / 2, height / 2);
  } else if (cenario == "campo") {
    background(100, 200, 100);
    fill(255);
    text("Você está no Campo!\nPressione ESPAÇO para ir à Cidade", width / 2, height / 2);
  } else if (cenario == "cidade") {
    background(100, 100, 200);
    fill(255);
    text("Você está na Cidade!\nPressione ESPAÇO para voltar ao Campo", width / 2, height / 2);
  }
}

function mousePressed() {
  if (cenario == "menu") {
    if (mouseX < width / 2) {
      cenario = "campo";
      somCampo.play();
    } else {
      cenario = "cidade";
      somCidade.play();
    }
  }
}

function keyPressed() {
  if (key == ' ') {
    if (cenario == "campo") {
      cenario = "cidade";
      somCampo.stop();
      somCidade.play();
    } else if (cenario == "cidade") {
      cenario = "campo";
      somCidade.stop();
      somCampo.play();
    }
  }
}
