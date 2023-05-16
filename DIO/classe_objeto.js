class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2023 - idade;
  }
  descrever() {
    console.log("Meu nome é ${this.nome} e minha idade é ${this.idade}");
  }
}
function compararPessoa(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
  } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
  }
}
const andreza = new Pessoa("Andreza", 24);
const lucas = new Pessoa("Lucas", 26);

compararPessoa(andreza, lucas);

/*
class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc() {
    return this.peso / Math.pow(this.altura, 2);
  }
}
const jose = new Pessoa("jose", 70, 1.75);
console.log(jose.calcularImc());
*/
