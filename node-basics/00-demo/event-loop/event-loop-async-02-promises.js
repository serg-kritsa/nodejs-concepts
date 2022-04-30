// Promise ????????????????????? as microtask

// Calls:

// 1 main executing
console.log('Starting') // 2 printed

setTimeout(
    () => console.log('2 sec. timer'), // callback-1
    2000 // timeout-1
)

setTimeout(
    () => console.log('0 sec. timer'), // callback 2
    0 // timeout-2
)

const promise01 = new Promise(function (resolve, reject) {
    setTimeout( 
        () => resolve('0 sec. Promise'),  // callback-3
        0 // timeout-3
    )
})
promise01.then(
    function (data) { console.log(data); }
)

const promise02 = Promise.resolve('instant promise')
promise02.then(
    function (data) { console.log(data); } // callback-4
)
    
console.log('Stopping') // 3 printed // sync code in Call Stack finished

// NodeAPI 
//     callback-1
//     callback-2
//     callback-3
//     instant promise // no timer promise moved to queue before 0 timeouts  

// Event Queue after timeouts
//     instant promise 
//     callback-2
//     callback-3
//     callback-1

// Event Loop puts callbacks in Call Stack
// instant promise
// 0 sec. timer
// 0 sec. Promise
// 2 sec. timer