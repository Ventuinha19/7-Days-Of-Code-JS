let valorpensado = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let repeticao = 0;

while (repeticao < 3) {
  const advinhar = prompt("Advinhe o número que eu estou pensando");
  if (advinhar == valorpensado) {
    alert("parabéns você acertou");
    repeticao = 6;
  } else {
    alert("você errou, tente novamente");
    repeticao++;
  }
  if (repeticao == 3) alert(`você perdeu, o número pensado foi ${valorpensado}`);
}
