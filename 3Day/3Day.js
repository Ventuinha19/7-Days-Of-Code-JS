const area = prompt("Você gostaria de seguir para a área de Back-End ou para uma área de Front-End?");
//Back-End
if (area == "Back-End") {
  const be = prompt("Deseja aprender qual das 2 linguagens a seguir? C# ou Java");
  if (be == "C#") {
    const resposta = prompt("Gostaria de se especializar em C# ou gostaria de se tornar um programador Fullstack?");
  } else if (be == "java") {
    const resposta = prompt("Gostaria de se especializar em Java ou gostaria de se tornar um programador Fullstack?");
  }

  //Front-End
} else if (area == "Front-End") {
  const fe = prompt("Deseja aprender qual das 2 linguagens a seguir? Vue ou aprender React");
  if (fe == "Vue") {
    const resposta = prompt("Gostaria de se especializar em Vue ou gostaria de se tornar um programador Fullstack?");
  }
} else if (fe == "React") {
  const resposta = prompt("Gostaria de se especializar em React ou gostaria de se tornar um programador Fullstack?");
}
let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' se sim.");
while (msg === "ok") {
  let novaLingua = prompt("Qual?");
  alert(`${novaLingua} é realmente uma tecnologia muito legal!`);
  msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' se sim.");
}
