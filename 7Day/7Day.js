let operacao = "";
let valor1 = "";
let valor2 = "";
function resultadoAdicao(x, y) {
  return x + y;
}
function resultadoSubtracao(x, y) {
  return x - y;
}
function resultadoMultiplicacao(x, y) {
  return x * y;
}
function resultadoDivisao(x, y) {
  return x / y;
}
let comeca = 1;

while (comeca != 2) {
  operacao = prompt(`Qual operação você deseja realizar? Adição, Subtração, Multiplicação; Divisão ou se quiser sair apenas escreva 'sair'`);

  if (operacao == "sair") {
    break;
  } else if (operacao == "adição") {
    valor1 = prompt(`Digite o 1° valor da equação`);
    const valor1formatado = parseFloat(valor1);
    valor2 = prompt(`Digite o 2° valor da equação`);
    const valor2formatado = parseFloat(valor2);
    if (isNaN(valor1formatado) || isNaN(valor2formatado)) {
      alert("Os valores digitados não são números, por favor tente novamente");
    } else alert(`${valor1} + ${valor2} = ${resultadoAdicao(valor1formatado, valor2formatado)}`);
  } else if (operacao == "subtração") {
    valor1 = prompt(`Digite o 1° valor da equação`);
    const valor1formatado = parseFloat(valor1);
    valor2 = prompt(`Digite o 2° valor da equação`);
    const valor2formatado = parseFloat(valor2);
    if (isNaN(valor1formatado) || isNaN(valor2formatado)) {
      alert("Os valores digitados não são números, por favor tente novamente");
    } else alert(`${valor1} - ${valor2} = ${resultadoSubtracao(valor1formatado, valor2formatado)}`);
  } else if (operacao == "multiplicação") {
    valor1 = prompt(`Digite o 1° valor da equação`);
    const valor1formatado = parseFloat(valor1);
    valor2 = prompt(`Digite o 2° valor da equação`);
    const valor2formatado = parseFloat(valor2);
    if (isNaN(valor1formatado) || isNaN(valor2formatado)) {
      alert("Os valores digitados não são números, por favor tente novamente");
    } else alert(`${valor1} * ${valor2} = ${resultadoMultiplicacao(valor1formatado, valor2formatado)}`);
  } else if (operacao == "divisão") {
    valor1 = prompt(`Digite o 1° valor da equação`);
    const valor1formatado = parseFloat(valor1);
    valor2 = prompt(`Digite o 2° valor da equação`);
    const valor2formatado = parseFloat(valor2);
    if (isNaN(valor1formatado) || isNaN(valor2formatado)) {
      alert("Os valores digitados não são números, por favor tente novamente");
    } else alert(`${valor1} / ${valor2} = ${resultadoDivisao(valor1formatado, valor2formatado)}`);
  }
}

alert(`Até a proxima`);
