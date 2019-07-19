function lempelZiv(str){
  codeBook = ["0", "1"];
  startIndex = 0; //start of strSlice
  covarage = 2; //length of strSlice
  //-- Start of the code block to obtain codeBook --
  while (startIndex < str.length){
    let strSlice = str.slice(startIndex, startIndex + covarage);
    if(codeBook.includes(strSlice)){
      covarage++;
      if (startIndex + covarage >= str.length) break;
    }else {
      codeBook.push(strSlice);
      startIndex += strSlice.length;
      covarage = 2;
    }
  }
  //-- End of the code block to obtain codeBook --

  //-- Start of the code to obtain numRep--
  let numRep = codeBook.map((subseq, index, arr) => {
    if (index < 2) return `${index + 1}`;
    let subArr = arr.slice(0, index);
    let numRepStr = "";
    let i = 1;
    while (subseq.length > 0){
      let searcStr = subseq.slice(0, subseq.length - i);
      if(subArr.includes(searcStr)){
          numRepStr += subArr.indexOf(searcStr) + 1;
          subseq = subseq.slice(subseq.length - i);
          if (subseq.length == 1){
            numRepStr += subArr.indexOf(subseq) + 1;
            break;
          }
          i = 1; 
      }else {
        i++;
      }
    }
    return numRepStr;
  });
  //-- End of the code to obtain numRep--

  //-- Start of the code to obtain numRepBin--
  let numRepBin = numRep.map((el, index) => {
      let binaryRep = baseConvert(+el.slice(0, el.length - 1), 2);
      let codeBookElement = codeBook[index];
      let lastDigit = codeBookElement[codeBookElement.length - 1];
      return binaryRep + lastDigit;
  });
  return numRepBin.slice(2);
  //-- End of the code to obtain numRepBin--
}
let result = randomNumberGenerator(0, 1, 10000).join("");
console.log(result, result.length);
//1011100100 don't give a result last digit remains alone comp don't know what to do
console.log(lempelZiv(result));

function baseConvert(numBaseTen, base2){
  let numBase2 = [];
  let i = 0;
  while (numBaseTen >= Math.pow(base2, i)){
    i++;
  }
  for(let j = i - 1; j > 0; j--){
     numBase2.push(numBaseTen % base2);
     numBaseTen = Math.floor(numBaseTen / base2);
  }
  numBase2.push(Math.floor(numBaseTen));
  return numBase2.reverse().join("");
}

function randomNumberGenerator(min, max, amount){
  let numbers = [];
  for (let i = 0; i < amount; i++){
    numbers.push(min + Math.round(Math.random() * max));
  }
  return numbers;
}

//Not working for all inputs in some str while creating code book, last digits of some str causes infinete loop
//for example 1011100100 don't give a result last digit remains alone comp don't know what to do 