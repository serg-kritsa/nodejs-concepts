test('BAD async demo should PASS w/o done callback but WILL FAIL THE NEXT CORRECT TEST', () => {
    setTimeout(()=>{
        expect(1).toBe(2)
    },200)
})

test('!!! THE NEXT CORRECT TEST', (done) => {
    setTimeout(()=>{
        expect(1).toBe(1)
        done()
    },200)
})

