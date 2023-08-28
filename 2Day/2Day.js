const nome = prompt("qual o seu nome?");
const idade = prompt("quantos anos você tem?");
const code = prompt("Qual linguagem de programação você está estudando?");
const msg = `Seu nome é ${nome}, você tem ${idade} e esta estudando ${code} correto?`;
const confirmado = prompt(msg);

if (confirmado == "sim") {
  alert("Que bom, ta vendo como eu aprendo rapido?");
} else if (confirmado == "nao") {
  alert("Perdão, poderia reiniciar a pagina para eu tentar aprender de novo?");
}
const linguagem = prompt("Você quer estudar JavaScript? Responda '1' para sim e '2' para não");

if (linguagem == 1) {
  alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else if (linguagem == 2) {
  alert("Ahh que pena... Já tentou aprender outras linguagens?");
}
