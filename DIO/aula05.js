const { gets, print } = require("./funcoes_aux");
/*
print(gets());
print(gets());
print(gets());
print(gets());
print(gets());
*/

let maior_numero = 0;

for (let i = 0; i < 5; i++) {
  const numero_aleatorio = gets();
  if (numero_aleatorio > maior_numero) {
    maior_numero = numero_aleatorio;
  }
  //numero_sorteado.push(numero_aleatorio);
}
console.log(maior_numero);
