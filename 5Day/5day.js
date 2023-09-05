let frutas = [];
let laticínios = [];
let congelados = [];
let doces = [];
let quer = 1;

while (quer != 2) {
  quer = prompt("Quer adicionar algum ítem a sua lista? digite 1 para sim e 2 para não");
  while (quer != 1 && quer != 2) {
    alert(`Operação não reconhecida!`);
    quer = prompt("Quer adicionar algum ítem a sua lista? digite 1 para sim e 2 para não");
  }

  if (quer == 1) {
    const item = prompt("Qual ítem você dejesa adicionar?");
    const onde = prompt(`Em qual lista você deseja adicionar ${item}? Digite 1-Frutas, 2-Laticínios, 3-congelados, 4-doces`);
    if (onde == 1) {
      frutas.push(item);
    } else if (onde == 2) {
      laticínios.push(item);
    } else if (onde == 3) {
      congelados.push(item);
    } else if (onde == 4) {
      doces.push(item);
    } else {
      alert("essa categoria não foi pré-definida");
    }
  }
}

if (quer == 2) {
  alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticínios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
}
