Function.prototype.newCall = function (context, ...args) {
    context.fn = this;
    let res = context.fn(...args)
    delete context.fn

    return res
}

let obj = {
    name:'Jack'
}

function test(arg1, arg2, arg3) {
    console.log(`${arg1} + ${arg2} + ${arg3}`)
    console.log(this.name)
}

test.newCall(obj, 1, 2, 3)