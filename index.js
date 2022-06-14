const respostaElement = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const botaoPerguntar = document.querySelector("#botaoPerguntar")
const respostas = [
  "Não.",
  "Sim.", 
  "Provalvemente.",
  "Pode contar com issso.",
  "Não conte com isso.",
  "Minhas fontes afirmam que sim.",
  "Minhas fontes afirmam que não.",
  "Existe uma boa possibiladade.",
  "Sem sombra de dúvidas.",
  "Não existe a menor chance.",
  "Com certeza!",
  "Nem por um milhão de reais!",
  "isso é tão óbvio.",
  "Você não vai gostar da resposta...",
  "Pode se alegrar, a resposta é sim!",
  "É mais fácil o palmeiras ganhar o mundial...",
  "Só quando o palmeiras ganhar o mundial.",
  "Um passarinho me montou que sim.",
  "Um passarinho me contou que não.",
]

// clicar em fazer pergunta
function fazerPergunta () {

if(inputPergunta.value == "") {
  alert("Digite sua pergunta")
  return
}

botaoPerguntar.setAttribute ("disabled", true)

const pergunta = "<div>" + inputPergunta.value + "</div>"
 
// gerar numeuro aleatorio
const  totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

respostaElement.innerHTML = pergunta + respostas[numeroAleatorio]

respostaElement.style.opacity = 1; 

 // sumir dps de um tempo
 setTimeout(function() {
   respostaElement.style.opacity = 0;
   botaoPerguntar.removeAttribute("disabled")
 }, 3000)
}

