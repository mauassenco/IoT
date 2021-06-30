 mudar = () =>{
    for (let i=1; i <= 10; i++) {
        const texto = document.createElement('P');
        texto.innerText = "Mudou " + i
        document.getElementById('app').appendChild(texto);
    }
}

 let botoesLigar =Array.from(document.querySelectorAll('.btn-ligar'))
 botoesLigar.forEach((botao) => {
     botao.addEventListener('click', (e)=> {
        e.target.disabled = true;
        e.target.previousElementSibling.src = "https://toppng.com/uploads/preview/light-bulb-png-transparent-light-bulb-115628766421gdl0skp2k.png";
        e.target.nextElementSibling.disabled = false;
     })
 })


 let botoesDesligar =Array.from(document.querySelectorAll('.btn-desligar'))
 botoesDesligar.forEach((botaoD) => {
     botaoD.addEventListener('click', (e)=> {
         e.target.disabled = true;
        e.target.previousElementSibling.previousElementSibling.src="https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940208oq66nq8jew.png";
        e.target.previousElementSibling.disabled = false;
     })
 })
