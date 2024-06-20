const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const tempo = document.querySelectorAll(".contador");
tempo[0].textContent="Olá";
const tempoObjetivo1 = new Date (2025, 03, 15, 15, 00); 
const tempoObjetivo2 = new Date (2027, 11, 29, 23, 00);
const tempoObjetivo3 = new Date (2025, 03, 16, 30, 00);
const tempoObjetivo4 = new Date (2027, 06, 04, 17, 45);
const agora = new Date() 
let segundos;
let minutos;
let horas;
let dias;

segundos (tempoObjetivo1-agorạ/1000)
minutos = segundos/60
horas = minutos/60
dias = horas/24



tempo[0].textContent= tempoObjetivo1-agora
tempo[1].textContent= textContent = agora


console.log(tempo);
for(let i = 0; 1 < botoes.length ; i++){
    botoes[i].onclick = function() {
        for (j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}
