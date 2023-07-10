/**
 * In imperative programming the biggest gossip is in the flow and the code is very explicit
 */
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

function media(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
}

/**
 * whereas in declarative programming things are not so implicit 
 */
const media2 = notas.reduce((acumulador, atual) => acumulador + atual, 0) / notas.length;