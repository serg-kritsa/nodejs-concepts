// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// const square = x => x * x

// console.log(square(2))

const eventManager = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    
    // longhand   printGuestListArrowFunc: function() {
    printGuestListArrowFunc() { 
        console.log('\tGuest list 1 for ' + this.name) // props are ALWAYS visible
        
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    },
    
    printGuestListLoseOfThisInNormalFunc() { 
        console.log('\tWorkaround guest list 2 for ' + this.name) // props are ALWAYS visible
        const that = this // workaround for normal func
        this.guestList.forEach(function(guest){
            // no this as current object 
            // console.log(this); // <ref *1> Object [global]
            // console.log(guest + ' is attending ' + this.name) // undefined
            console.log(guest + ' is attending ' + that.name) // undefined
        })
    }
}

eventManager.printGuestListArrowFunc()
eventManager.printGuestListLoseOfThisInNormalFunc()