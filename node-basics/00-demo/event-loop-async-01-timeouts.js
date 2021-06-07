// Promise ????????????????????? as microtask

// Calls:

// 1 main executing
console.log('Starting') // 2 printed

setTimeout(
    () => { console.log('2 Second Timer')}, // callback-1
    2000 // timeout 1
)
// 3 Node API registers callback-1 and starts timeout 2000ms

setTimeout(
    () => { console.log('0 Second Timer') }, // callback 2
    0 // timeout 2
)

// 4 Node API registers callback-2 and starts timeout 0ms
// 5 callback-2 stands in Event Queue after timeout 0ms 
// 6 wait in Event Queue while sync code is in Call Stack
console.log('Stopping') // 7 printed // sync code in Call Stack finished
// 8 Event Loop moves callback-2 in Call Stack
// 9 callback-2 fired from Call Stack 
// 10 log('0 Second Timer') printed

// 11 callback-1 stands in Event Queue after timeout 2000ms 
// 12 Event Loop moves callback-1 in Call Stack
// 13 callback-1 fired from Call Stack 
// 10 log('2 Second Timer') printed


