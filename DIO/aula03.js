/* Média do Aluno
const nota1 = 5;
const nota2 = 6;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;

console.log(media);

if (media < 5) {
  console.log("Reprovado");
} else if (media >= 5 && media < 7) {
  console.log("Recuperação");
} else {
  console.log("Aprovado");
}
*/
/*Calcula IMC
const peso = 68.4;
const altura = 1.63;
const imc = peso / Math.pow(altura, 2);

console.log(imc);

if (imc <= 18.5) {
  console.log("Abaixo do peso");
} else if (imc > 18.5 && imc <= 24.9) {
  console.log("Peso normal");
} else {
  console.log("Acima do peso");
}
*/

const preco_etiqueta = 100;
const desconto_debito = 0.1;
const desconto_pix = 0.15;
const parcela_duas = 0;
const parcela_maisdeduas = 0.1;
const forma_de_pagamento = 1;

if (forma_de_pagamento === 1) {
  console.log(preco_etiqueta - preco_etiqueta * desconto_debito);
} else if (forma_de_pagamento === 2) {
  console.log(preco_etiqueta - preco_etiqueta * desconto_pix);
} else if (forma_de_pagamento === 3) {
  console.log(preco_etiqueta);
} else {
  console.log(preco_etiqueta + (preco_etiqueta + parcela_maisdeduas));
}
