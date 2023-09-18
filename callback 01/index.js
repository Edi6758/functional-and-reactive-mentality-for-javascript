//01 passar uma função como parâmetro para outra
function exec(fn, a, b) {
    return fn(a, b)
}

const somar = (x, y) => console.log(x + y)
const subtrair = (w, z) => console.log(w - z)

exec(somar, 50, 30)
exec(subtrair, 50, 20)


//exemplo real
setInterval(() => {
    console.log("teste...")
}, 5000)