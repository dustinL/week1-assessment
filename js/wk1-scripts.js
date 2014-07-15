var pigLatin = function(word) {
	var consonant = 'bcdfghjklmnpqrstvwxyz';
	var vowel = 'aeiou';
	var firstLetter = [];

	if(vowel.indexOf(word[0]) > -1) {
		return word + 'ay';
	} else {
		for (var i=0; consonant.indexOf(word[i]) > -1; i++) {
			
			if((word[i] === 'q') && (word[i+1] === 'u')) {
			return word.substring(i+2) + firstLetter.join("") + "quay";
		} 

		
			
			firstLetter.push(word[i]);
		}
	} return word.substring(i) + firstLetter.join("") + 'ay'; 
};