Function.prototype.myApply = function(context, args) {
    context.fn = this
    let res 
    if(args) {
        res = context.fn(...args)
    } else {
        res = context.fn()
    }
    delete context.fn
    return res
}

let obj = {
    name:'Jack'
}

function test (arg1, arg2, arg3) {
    console.log(this.name)
    console.log(`${arg1} ${arg2} ${arg3}`)
}

test.myApply(obj, [1,2,3])