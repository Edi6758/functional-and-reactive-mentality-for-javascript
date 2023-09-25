Array.prototype.meuMap = function(fn) {
    const novoArray = []
    for(let i = 0; i<this.length; i++) {
        const resultado = fn(this[i], i , this)
        novoArray.push(resultado)
    }
    return novoArray
}

let lista = [1,2,3,4,5]

const resultado = lista.map((n) => n * 2);
const resultado2 = lista.meuMap((n) => n * 2);
console.log(resultado)
console.log(resultado2)