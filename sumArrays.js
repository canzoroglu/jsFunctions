//parameters are same-length arrays
//returns the array which consist of element by element summation of arrays 
function sumArrays(){
	var sumArr = [];
	var args = arguments;
	var arr1 = args[0];
	arr1.forEach(function(el, index){
		var count = el;
		for(var i = 1; i < args.length; i++){
			count += args[i][index];
			}
		sumArr.push(count);
		});
		
	return sumArr;
	}