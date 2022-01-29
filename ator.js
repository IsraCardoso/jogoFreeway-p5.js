//Ator
let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
      image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
       
       yAtor += 3
       }
  }
}


function verificaColisao(){
  for (let i=0; i<imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if(colisao){
      somDaColisao.play()
      voltaAtor();
      if (meusPontos > 0 ){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtor(){
  yAtor = 366;
}

function incluiPontos(){
  
  textAlign(CENTER);
  textSize(25);
  fill(255, 240, 60);
  text(meusPontos, width/5, 27)
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    voltaAtor();
    somDoPonto.play()
  }
}

function podeSeMover(){
   return yAtor < 366;          
}