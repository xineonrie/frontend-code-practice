var newScript = document.createElement('script')
newScript.src = 'http://example.com'
document.body.appendChild(newScript)

function handleResponse(data) {
    console.log(data)
}

// handleResponse({ name: "Jack", age: 20 });


jsonp({
    url:'http://example.com',
    params: {},
    callBack: 'ondata'
}).then(data => {
    console.log(data)
})

function jsonp({url, params, callBack}) {
    return new Promise((resolve, reject) => {
        const callBackName = callBack || `jsonP_${Date.now()}_${Math.random.toString.slice(2)}`

        window[callBackName] = function(data){
            resolve(data);
            delete window[callBackName];
            document.body.removeChild(script)
        }

        params.callBack = callBackName
        const query = Object.keys(params).map(key => `${encodeURIComponent(key)} = ${encodeURIComponent(params[key])}`).join('&')

        const script = document.createElement('script')
        // document.appendChild(script)
        script.src = `${url}?${query}`

        script.onerror = function(){
            reject(new Error('Network error: ', url))
            delete window[callBackName]
            document.body.removeChild(script)
        }

        document.appendChild(script)
    })
}

jsonp({
    url,
    params,
    callBack:'onData'
}).then(data =>{
    console.log(data)
}).catch(e=>{
    console.error(e)
})

function jsonp({url, params, callBack}) {
   return new Promise((resolve,reject => {
    const callBackName = callBack || `jsonp_${Data.now()}_${Math.random().toString().slice(2)}`

    window[callBackName] = function(data){
        resolve(data)
        delete window[callBackName]
        document.body.removeChild(script)
    }

    params.callBack=callBackName
    const query=Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}&`)

    const script = document.createElement('script')
    script.src=`${url}?${query}`

    script.onError=function(){
        reject(new Error('network error: ', url))
        delete window[callBackName]
        document.body.removeChild(script)
    }

    document.body.appendChild(script)
   }))
}