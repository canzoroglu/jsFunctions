function createRandomNums(min, max, len){
  min = Math.ceil(min);
  max = Math.floor(max);
  let randomNums = [];
  for (let i = 0; i < len; i++){
      let num = Math.floor(Math.random() * (max - min + 1)) + min;
      randomNums.push(num);
  }
  return randomNums;   
}
function createPassword(len){
    let charCodes = createRandomNums(33, 126, len);
    return charCodes.map(code => String.fromCharCode(code))
    .join("");
}
console.log(createPassword(10));