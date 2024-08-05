function getElementsUpTo(array, n) {
  // your code here
  var elmUpTo = array.slice(0, n);
  return elmUpTo;
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
