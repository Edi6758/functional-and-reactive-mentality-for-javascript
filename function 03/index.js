// Exemplo 1: Função de seta básica com um parâmetro
const dobrar = (numero) => numero * 2;
console.log(dobrar(5)); // Saída: 10

// Exemplo 2: Função de seta sem parâmetros
const saudacao = () => {
  return "Olá, mundo!";
};
console.log(saudacao()); // Saída: Olá, mundo!

// Exemplo 3: Função de seta com múltiplos parâmetros
const soma = (a, b) => a + b;
console.log(soma(3, 4)); // Saída: 7

// Exemplo 4: Função de seta em uma única linha (retorno implícito)
const quadrado = (x) => x * x;
console.log(quadrado(3)); // Saída: 9

// Exemplo 5: Função de seta como argumento de outra função
const numeros = [1, 2, 3, 4, 5];
const quadrados = numeros.map((numero) => numero * numero);
console.log(quadrados); // Saída: [1, 4, 9, 16, 25]

// Exemplo 6: Função de seta em um método de objeto (cuidado com o contexto this)
const pessoa = {
  nome: "João",
  saudacao: () => {
    console.log(`Olá, eu sou ${this.nome}`);
  },
};
pessoa.saudacao(); // Saída: Olá, eu sou undefined (o valor de this não é o esperado)

// Função de seta com parâmetro variável
const somarNumeros = (...numeros) => {
    let soma = 0;
    for (const numero of numeros) {
      soma += numero;
    }
    return soma;
  };
  
  console.log(somarNumeros(1, 2, 3, 4, 5)); // Saída: 15
  console.log(somarNumeros(10, 20, 30)); // Saída: 60
  console.log(somarNumeros(2)); // Saída: 2
  console.log(somarNumeros()); // Saída: 0 (nenhum argumento)  