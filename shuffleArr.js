//creates new array by shuffling its elements
function shuffleArr(arr){
  var shuffledArr = [];
  for(var i = 0; ;i++){
    //choose an element randomly
    var rand = arr[Math.floor(Math.random() * arr.length)];
    if(shuffledArr.indexOf(rand) === -1){
      shuffledArr.push(rand);
    }
    if(shuffledArr.length === arr.length){
      return shuffledArr;
    }
  }
}