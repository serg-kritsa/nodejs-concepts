// Calls:
// 1 anonymous
// 2 list(['City 1', 'City 2'])
// 3 forEach
// 4 anonymous
// 5 console.log('City 1')
// 6 anonymous
// 7 console.log('City 2')

const list = cities => {
    cities.forEach(city => {
        console.log(city);
    });
}
const myItems = ['City 1', 'City 2']

list(myItems)