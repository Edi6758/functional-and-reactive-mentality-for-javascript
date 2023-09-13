function goodMorning() {
    console.log("good morning")
}

function goodAfternoon() {
    console.log("good afternoon")
}

function executAnyway(fn) {
    if(typeof fn == 'function') {
        fn()
    }
}

//

function square(base){
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const bits8 = square(2,8)