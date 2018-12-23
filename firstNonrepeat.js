//Takes string to be searched
//Returns the first character in the string which is not repeat
function firstNonRepeat(str){
  for(let i = 0; i < str.length; i++){
    let re = new RegExp(str[i], "gi");
    if(str.match(re).length === 1) return str[i];
  }
}
