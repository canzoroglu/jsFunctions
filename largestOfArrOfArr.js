//the parameter is an array of arrays
//return an array whose elements are biggest in the initial subarrays
function largestOfFour(arr) {
  // You can do this!
  arr = arr.map(function(el){//maps an array to its biggest element
    var mx = 0;//temporary max
    el.forEach(function(i){//finds the biggest element in the array
      if(i > mx){
        mx = i;
      }
    });
    return mx;
  });
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);