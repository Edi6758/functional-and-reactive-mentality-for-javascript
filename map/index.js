const numeros = [1, 2, 3, 4, 5];

// Dobrando cada número
const numerosDobrados = numeros.map(numero => numero * 2);
console.log("Números dobrados:", numerosDobrados);

const nomes = ["Alice", "Bob", "Charlie"];

// Adicionando "Sr." antes de cada nome
const nomesComTitulo = nomes.map(nome => "Sr. " + nome);
console.log("Nomes com título:", nomesComTitulo);

const frutas = ["maçã", "banana", "laranja"];

// Transformando em objetos com propriedades
const frutasObjetos = frutas.map(fruta => ({ nome: fruta, quantidade: 0 }));
console.log("Frutas como objetos:", frutasObjetos);

const pessoas = [
  { nome: "Alice", idade: 25 },
  { nome: "Bob", idade: 30 },
  { nome: "Charlie", idade: 35 },
];

// Extraindo apenas nomes das pessoas
const nomesPessoas = pessoas.map(pessoa => pessoa.nome);
console.log("Nomes das pessoas:", nomesPessoas);

// Calculando a área de círculos com base no raio
const raios = [2, 3, 4, 5];
const areasCirculos = raios.map(raio => Math.PI * raio ** 2);
console.log("Áreas dos círculos:", areasCirculos);
