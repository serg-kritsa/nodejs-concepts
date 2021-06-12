// // async w/o await
// const asyncFunc01 = async () => {} 
// const asyncFunc02 = async () => { return '+' } 
// const asyncFunc03 = async () => { return '-' } 
// console.log(asyncFunc01()); // Promise { undefined }
// console.log(asyncFunc02()); // Promise { '+' }
// console.log(asyncFunc03()); // Promise { '-' }
// // asyncFunc01().then((result) => {
// // asyncFunc02().then((result) => {
// asyncFunc03().then((result) => {
//     console.log(result) // undefined || +
// }).catch((e) => {
//     console.log('e', e) // -
// })
// const result02 = asyncFunc02()
// console.log(result02) // Promise { '+' }
// const result03 = asyncFunc03()
// console.log(result03) // Promise { '-' }
// =========================================================
// async - await
const asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) { return reject('Numbers must be non-negative') }
            resolve(a + b)
        }, 1000)
    })
}

const doWork = async () => {
    const sum = await asyncAdd(1, -99) // 1)->
    const sum2 = await asyncAdd(sum, 50)
    const sum3 = await asyncAdd(sum2, 3)
    return sum3
}

doWork().then((result) => {
    console.log('result', result)// 2)-> e Numbers must be non-negative
}).catch((e) => {
    console.log('e', e)
})