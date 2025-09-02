const PENDING = Symbol();
const REJECTED = Symbol();
const FULLFILLED = Symbol();

class myPromise {
    constructor(executor) {
        this.state = PENDING;
        this.value = undefined;
        this.reason = undefined;

        const resolve = value =>{
            if(this.state === PENDING) {
                this.state = FULLFILLED;
                this.value = value
            }
        }
        
        const reject = reason => {
            if(this.state = PENDING) {
                this.state = REJECTED
                this.reason = reason
            }
        }

        try{
            executor(resolve,reject)
        }catch(error){
            reject(error)
        }
    }
}

let p1 = new Promise((resolve,reject) => {
    resolve()
})

p1.then(res =>{ 
    console.log('???',res)
})