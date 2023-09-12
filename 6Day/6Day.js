let frutas = [];
let laticínios = [];
let congelados = [];
let doces = [];
let quer = 1;
let remove = " ";

while (quer != 2) {
  quer = prompt("Quer adicionar algum ítem a sua lista? digite 1 para sim, 2 para não ou 3 para remover algum ítem da lista");
  while (quer != 1 && quer != 2 && quer != 3) {
    alert(`Operação não reconhecida!`);
    quer = prompt("Quer adicionar algum ítem a sua lista? digite 1 para sim, 2 para não ou 3 para remover algum ítem da lista");
  }

  if (quer === "2") {
    break;
  }
  if (quer == 1) {
    const item = prompt("Qual ítem você deseja adicionar?");
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
  } else if (quer == 3) {
    if (frutas.length === 0 && laticínios.length === 0 && doces.length === 0 && congelados.length === 0) {
      alert(`Não tem nenhum ítem na lista`);
    } else {
      remove = prompt(`Qual produto deseja remover?\n  Frutas: ${frutas}\n  Laticínios: ${laticínios}\n  Congelados: ${congelados}\n  Doces: ${doces} `);
      if (frutas.indexOf(remove) != -1) {
        frutas.splice(frutas.indexOf(remove), 1);
        alert(`${remove} foi retirado da lista`);
      } else if (laticínios.indexOf(remove) != -1) {
        laticínios.splice(laticínios.indexOf(remove), 1);
        alert(`${remove} foi retirado da lista`);
      } else if (congelados.indexOf(remove) != -1) {
        congelados.splice(congelados.indexOf(remove), 1);
        alert(`${remove} foi retirado da lista`);
      } else if (doces.indexOf(remove) != -1) {
        doces.splice(doces.indexOf(remove), 1);
        alert(`${remove} foi retirado da lista`);
      } else {
        alert(`Não foi achado o item dentro das listas`);
      }
    }
  }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticínios}\n  Congelados: ${congelados}\n  Doces: ${doces}  `);
