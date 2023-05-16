/*
function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}
function classificarImc(imc) {
  if (imc <= 18.5) {
    return "Abaixo do peso";
  } else if (imc > 18.5 && imc <= 24.9) {
    return "Peso normal";
  } else {
    return "Acima do peso";
  }
}

function main() {
  const peso = 75;
  const altura = 1.75;

  const imc = calcularImc(peso, altura);
  console.log(classificarImc(imc));
}
main();
*/

function escrevaMeuNome(nome) {
  return nome;
}
var nome = "Andreza";

function verificarIdade(idade) {
  if (idade < 18) {
    console.log(escrevaMeuNome(nome) + " é de menor");
  } else {
    console.log(escrevaMeuNome(nome) + " é de maior");
  }
}
verificarIdade(24);
