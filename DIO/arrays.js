/* Calcula a média do aluno

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;
//const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma = soma + nota;
}
const media = soma / notas.length;
console.log(soma);
console.log(media);
*/

/*Percorre o nome por letra

const nome = "andreza naara";
for (let i = 0; i < nome.length; i++) {
  const letra = nome[i];
  console.log(letra);
}
*/

/* Imprime numeros pares da lista

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
  if (numero % 2 === 0) {
    console.log(numero);
  }
}
*/
