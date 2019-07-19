// fn is a function whose first param is error obj
// timeoutify guarantees fn to be executed in a given delay time with an error obj if this time is exceeded 
function timeoutify(fn, delay){
  let timeout = setTimeout(() => {
    timeout = null;
    fn(new Error("Timeout"));
  }, delay);
  return function(){
    if(timeout){
      clearTimeout(timeout);
      fn.apply(this, arguments);
    }
  }
}

/*
function con(err, data){
  if(err) console.log(err);
  else console.log(data);
}
setTimeout(timeoutify(con, 1000), 3000);
*/
