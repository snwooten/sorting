describe('split function', function(){

  it('is a function', function(){
    expect( typeof split) .toBe( "function" );
  });

  it('is able to split an array with even length into halves', function(){
    expect( split([2, 10, 54, 99, -2, 0]) ).toEqual( [[2, 10, 54], [99, -2, 0]] );
  });

  it('is able to split an array with odd length into halves', function(){
    expect( split([2, 10, 54, 99, -2]) ).toEqual( [[2, 10, 54], [99, -2]]);
  });

  it('is able to handle an array with length of 1', function(){
    expect( split([1]) ).toEqual( [1] );
  });

  it('is able to handle an array with length of 0', function(){
    expect( split([]) ).toEqual( [] );
  });


  it('returns a nested array with 2 elements', function(){
    expect( split([1, 2]) ).toEqual( [[1], [2]] );
  });


   it('should throw a custom TypeError when given non-numerical elements in the array', function() {
    expect(function(){
      split(['a cat', function(){return 1 + 1}, 'a floofy dog', false]);
    }).toThrowError(TypeError, 'Elements must be numbers');
  });
});

describe('merge', function(){


  it('is able to merge 2 sorted arrays into one sorted array', function(){
    expect( merge([1], [2]) ).toEqual( [1, 2] );
  });

  it('is able to merge 2 arrays of equal lengths', function(){
    expect( merge([1, 2, 3], [4, 5, 6]) ).toEqual( [1, 2, 3, 4, 5, 6] );
  });

  it('is able to merge 2 arrays of unequal lengths', function(){
    expect( merge([1, 2, 3], [4, 5]) ).toEqual( [1, 2, 3, 4, 5] );
  });

  it('is returns the original array if only 1 argument is passed in', function(){
    expect( merge( [1]) ).toEqual( [1] );
  });

});

describe('mergeSort function', function(){

  it('is a function', function(){
    expect( typeof mergeSort) .toBe( "function" );
  });

  it('merge sorts an array with duplicates', function(){
    expect( mergeSort( [3, -1, 89, .1, 2, 3]) ).toEqual( [-1, .1, 2, 3, 3, 89 ] );
  });

  it('merge sorts an array of even length', function(){
    expect( mergeSort( [3, 8, 1, 2, 0, 10]) ).toEqual( [0, 1, 2, 3, 8, 10] );
  });

  it('merge sorts an array of odd length', function(){
    expect( mergeSort( [3, -1, 89, .1, 2]) ).toEqual( [-1, .1, 2, 3, 89] );
  });

  it('merge sorts an array of length 1', function(){
    expect( mergeSort( [1]) ).toEqual( [1] );
  });

  it('merge sorts an empty array', function(){
    expect( mergeSort( []) ).toEqual( [] );
  });

  it('properly handles negative numbers', function(){
    expect( mergeSort( [-100, -200, -300, -89, -3]) ).toEqual( [-300, -200, -100, -89, -3] );
  });

  //spy:
  //mergeSort should be called recursively
  //mergeSort should utilize merge and split

  it('should throw a custom TypeError when given non-numerical elements in the array', function() {
    expect(function(){
      mergeSort(['a cat', function(){return 1 + 1}, 'a floofy dog', false]);
    }).toThrowError(TypeError, 'Elements must be numbers');
  });
});
