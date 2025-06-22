let campoImg, cidadeImg, caminhaoImg, somCaminhao;
let xCaminhao = 50;
let viagem = false;

function preload() {
  campoImg = loadImage('assets/produtos.png');
  cidadeImg = loadImage('assets/cidade.png');
  caminhaoImg = loadImage('assets/caminhao.png');
  somCaminhao = loadSound('assets/som_caminhao.mp3');
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

  image(campoImg, 0, 0, width / 2, height);
  image(cidadeImg, width / 2, 0, width / 2, height);
  image(caminhaoImg, xCaminhao, height / 2, 80, 50);

  if (viagem) {
    xCaminhao += 2;
    if (xCaminhao > width) {
      viagem = false;
      xCaminhao = 50;
    }
  }
}

function mousePressed() {
  if (!viagem) {
    somCaminhao.play();
    viagem = true;
  }
}

function keyReleased() {
  cidadeImg.filter(THRESHOLD);
}
