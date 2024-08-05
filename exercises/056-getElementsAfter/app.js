function getElementsAfter(array, n) {
  // your code here
 var elmAfter = array.slice(n + 1)
 return elmAfter
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
