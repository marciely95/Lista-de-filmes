// terror, comédia ,ação

// A freira 2, 16, terror
// As branquelas, 14, comédia 
// Casamento Sangrento,18 , terror
// Invocação do mal, 14, terror
//Ouija: O jogo dos espíritos, 14, terror
// O exorcista do papa, 16, terror
// A entidade, 16, terror
// Percy Jackson  e o ladrão de raios, 12, ação
// Divertidamente, livre, comédia
//Maze Runner: correr ou morrer, 14, ação 

let campoIdade;
let campoTerror;
let campoComedia;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade");
  campoIdade = createInput("5");
  campoTerror = createCheckbox("gosta De terror ?");
  campoComedia = createCheckbox("gosta De comedia ?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeTerror = campoTerror.checked();
  let gostaDeComedia = campoComedia.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeTerror, gostaDeComedia);
  
  
  fill(color(76, 0, 115));
  textAlign(CENTER,CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}
    
    function geraRecomendacao(idade, gostaDeTerror, gostaDeComedia) {
    if(idade >= 14) {
        if(idade >= 16) {
            return "A Freira ";
        } else {
          if(idade >= 15){
            
          }
            if(gostaDeTerror || gostaDeComedia){
                return "Casamento Sangrento";
            } else {
                return "As branquelas";
            }
          }
    } else {
        if(gostaDeTerror ) {
            return "Invocação do mal";
        } else {
            return "A entidade";
        }
    }
}