// Gerando numero aleatorio
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
  
// Envia dados para a API via AJAX
function sendToServer(state) {
  var KEY = 'NHULAJSJFXR8MTJT';
  //criar um objeto capaz de enviar dados via requisição HTTP GET
  const http = new XMLHttpRequest();
  //prepara um GET passando a váriavel lux como ultimo paramentro do link
  http.open("GET", "https://api.thingspeak.com/update?api_key="+ KEY +"&field1=0"+state);
  //envia um GET
  http.send();
  //quando a requisição retornar ele chama o console e imprime o valor gerado
  http.onload = console.log(http.responseText+" "+state) 
} 

let intensidade = 0;
// Liga lampada
ligaLampada = (e)=>{
  e.target.previousElementSibling.previousElementSibling.previousElementSibling.src = "https://toppng.com/uploads/preview/light-bulb-png-transparent-light-bulb-115628766421gdl0skp2k.png";
}
// Desliga lampada
desligaLampada = (e)=>{
  e.target.previousElementSibling.previousElementSibling.previousElementSibling.src = "https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940208oq66nq8jew.png"; 
  intensidadeDisplay.innerText = 0
}
let thingspeakGraph = document.getElementById('thingspeak-graph');
let intensidadeDisplay = document.getElementById('intensidade-display');
intensidadeDisplay.innerText = intensidade;

// Piscar lampada
let botoesPiscar =Array.from(document.querySelectorAll('.btn-blink'))
let aviso = document.getElementById('disclamer');

botoesPiscar.forEach((botaoP) => {
  botaoP.addEventListener('click', (e)=> {
      var intervalo = 0;
      var piscadas = 10; 
      aviso.innerText = `${piscadas} piscadas com o intervalo de 10s cada uma`    
          while(piscadas > 0){          
              setTimeout(function(){               
                  ligaLampada(e);
                  intensidade = getRndInteger(100, 2000);    
                  intensidadeDisplay.innerText = intensidade + "w"    
                  sendToServer(intensidade)
                  thingspeakGraph.src = thingspeakGraph.src                                                                                                                  
              }, intervalo);        
              intervalo = intervalo + 10200; 
              setTimeout(function(){                
                  desligaLampada(e); 
              }, intervalo);
              piscadas--;              
              intervalo = intervalo+ 10200;
          }  
  }) 
})

const botaoLigar = document.querySelector("body > div > div > button.btn-ligar");
botaoLigar.addEventListener('click', ()=> {
  intensidade = getRndInteger(100, 2000);
  console.log(intensidade)
  intensidadeDisplay.innerText = intensidade + "w"
  sendToServer(intensidade)
  thingspeakGraph.src = thingspeakGraph.src
  
})

const botaoDesligar = document.querySelector("body > div > div > button.btn-desligar");
botaoDesligar.addEventListener('click', ()=> {
  intensidadeDisplay.innerText = 0;
})
