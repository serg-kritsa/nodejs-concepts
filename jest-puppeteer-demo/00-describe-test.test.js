describe('math', () => {
  beforeEach(() => {});
  afterEach( () => {});

  test('Add two numbers', () => {
    const sum = 1 + 2;
    expect(sum).toEqual(3);
  });
});



describe('When condition 1', () => {
  beforeEach(() => {});
  afterEach( () => {});
  
  test('statement', () => {});
  
  describe('and condition 2', () => {
    test('statement', () => {});
    test('statement', () => {});
    
    describe('and condition 3', () => {
      test('statement', () => {});
      test('statement', () => {});
      test('statement', () => {});
      
    }); // grouping tests
  }); // grouping tests
});
