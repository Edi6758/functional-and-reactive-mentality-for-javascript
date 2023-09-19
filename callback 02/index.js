// Exemplo 1: Callback Simples
function executaFuncao(callback) {
    callback();
  }
  
  function minhaFuncao() {
    console.log("Callback executado!");
  }
  
  executaFuncao(minhaFuncao);
  
  // Exemplo 2: Callback com Parâmetros
  function executaOperacao(a, b, callback) {
    const resultado = callback(a, b);
    console.log("Resultado:", resultado);
  }
  
  function somar(x, y) {
    return x + y;
  }
  
  executaOperacao(5, 3, somar);
  
  // Exemplo 3: Callbacks Aninhados
  function primeiro(callback) {
    setTimeout(function () {
      console.log("Primeiro");
      callback();
    }, 1000);
  }
  
  function segundo() {
    console.log("Segundo");
  }
  
  primeiro(segundo);
  
  // Exemplo 4: Promises e Callbacks
  function exemploPromise() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("Promessa resolvida");
      }, 1000);
    });
  }
  
  function callbackExemplo() {
    console.log("Callback executado após a promessa ser resolvida");
  }
  
  exemploPromise().then(callbackExemplo);
  
  // Exemplo 5: Callback Hell (Pirâmide de Callbacks)
  function terceiro() {
    console.log("Terceiro");
  }
  
  primeiro(function () {
    segundo(function () {
      terceiro();
    });
  });
  
  // Exemplo 6: Async/Await
  async function exemploAsync() {
    await delay(1000);
    console.log("Passaram-se 1 segundo");
  }
  
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  exemploAsync();
  