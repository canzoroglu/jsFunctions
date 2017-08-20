//accepts regex and string as parameterts
//returns an object whose keys are the whole matches and 
//values are the groups in that match.
function regexsWithGroups(re, str){
	var match;
	var reObj = {};
	do {
		match = re.exec(str);
		if (match) {
			reObj[match[0]] = match.slice(1, match.length);
		}
	} while (match);
	return reObj;
}
