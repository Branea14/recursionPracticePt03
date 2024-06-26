/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/
//assign a variable to arr.pop()
//obtain the array and test to see if it's an array (Array.isArray)
//if true, then call the recursive function flatten(arr.length - 1)



function flatten(arr) {
  if (arr.length === 0) {
    return [];
  } else {
    let emptyArr = []
    let testingArr = arr.pop() //extracts the 'first' element
    if (Array.isArray(testingArr)) {
      return emptyArr = emptyArr.concat(flatten(testingArr));
      //console.log(testingArr.concat(emptyArr))
      //console.log(flatten(testingArr))
     } else {
      emptyArr.push(testingArr);
    }
    return emptyArr
    //return emptyArr.concat(flatten(arr));
  }
}



console.log(flatten([1, [2, [3]]])); // [1, 2, 3])
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
