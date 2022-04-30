class Greetings {
    english() { return 'Hello'; }
    spanish() { return 'Hola'; }
}

class Greetings {
    german() { return 'Hallo'; }
    french() { return 'Bonjour'; }
}

const greetings = new Greetings();
const moreGreetings = new MoreGreetings();

// const allGreetings = new Proxy(moreGreetings, {
//     get: function(target, property) {
//         console.log(property);
//     }
// });
// allGreetings.french             // french

// ====================================================
// const allGreetings = new Proxy(moreGreetings, {
//     get: function(target, property) {
//         return target[property];
//     }
// });
// console.log(allGreetings.german); // german() { return 'Hallo'; }
// console.log(allGreetings.german()); // 'Hallo'

// ====================================================
// const allGreetings = new Proxy(moreGreetings, {
//     get: function(target, property) {
//         return target[property] || greetings[property];
//     }
// });
// console.log(allGreetings.english()); // 'Hello'
