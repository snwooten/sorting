describe('Bubble Sort', function(){


  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('Bubble Sort is a function', function() {
    expect( typeof bubbleSort).toBe('function');
  });

  it('Sorts an array of integers', function() {
    expect( bubbleSort([25, 39, 2, 9, 0])).toEqual([0, 2, 9, 25, 39]);
  });

  it('Sorts an array with negative integers', function() {
    expect( bubbleSort([-5, 10, -100, 2, 0])).toEqual([-100, -5, 0, 2, 10]);
  });

  it('Sorts an array with numerical non-integers', function() {
    expect( bubbleSort([.25, -.25, 7, 99, .11])).toEqual([-.25, .11, .25, 7, 99]);
  });

  it('Sorts an array with only 1 element', function() {
    expect( bubbleSort([1])).toEqual([1]);

  });
  it('should throw a custum  TypeError when given non-numerical elements in the array', function() {
    expect(function(){
      bubbleSort(['a cat', function(){return 1 + 1}, 'a floofy dog', false]);
    }).toThrowError(TypeError, 'Elements must be numbers');
  });

});

