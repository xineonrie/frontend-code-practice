
function myNew(fun, ...args) {
    let obj = Object.create(fun.prototype)

    let res = fun.apply(obj, args)
    return (res != null) && (typeof res === 'object' || typeof res === 'function') ? res : obj
}

function Animal(name) {
    this.name = name

    // return {}
}

let instance1 = myNew(Animal, 'dog')
console.log(instance1.name)