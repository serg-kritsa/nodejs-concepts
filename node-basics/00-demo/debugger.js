// old // 1) node inspect .\debugger.js // 2) chrome://inspect/#devices

// easy way // 1) node .\debugger.js 2) F10 F11 

const eventManager = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    
    // longhand   printGuestListArrowFunc: function() {
    printGuestList() { 
        console.log('\tGuest list 1 for ' + this.name) // props are ALWAYS visible
        
        debugger        

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

eventManager.printGuestList()