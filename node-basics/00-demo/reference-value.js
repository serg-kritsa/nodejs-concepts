let book = { title: "T", author: "A" }
let {title} = book
title = "T2"
console.log(title, book.title);

let author = book.author
author = "A2"
console.log(author, book.author);

function change(prop, value) {
    prop = value
    console.log(prop, value);
}
function change(obj, prop, value) {
    obj[prop] = value
    console.log(prop, value);
}
change(book.author, "A3")
console.log(book.author);

change(book, 'author', "A4")
console.log(book.author);



// async function myAsyncSetTimeout(callback, timer) {
//     const promise = new Promise(function (resolve, reject) {
//         const now = Date.now()
//         console.log(now)
//         let localnow
//         for (let i = 0; i < 1e10; i++) {
//             localnow = Date.now() - now;
//             // console.log(localnow);
//             if (localnow === timer) {
//                 callback()
//                 resolve('DATA')
//                 break
//             }
//         }
//     });
//     // promise.then(function (data) {
//     //     callback()
//     // })
// }

// function mySyncSetTimeout(callback, timer) {
//     const now = Date.now()
//     console.log(now);
//     let localnow
//     for (let i = 0; i < 1e10; i++) {
//         localnow = Date.now() - now;
//         console.log(localnow);
//         if (localnow === timer) {
//             callback()
//             break
//         }
//     }
// }
// await myAsyncSetTimeout(()=>console.log('END'),1000)

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 2) { console.log("HALF");}
//     }
//     console.log("END");
// }
// test()
// console.log(123);
// console.log(456);
// console.log(789);
