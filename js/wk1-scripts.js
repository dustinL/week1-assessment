$(document).ready(function() {
  var word;

  $("#word-form").submit(function(event) {
  	event.preventDefault();

  	word = $("#word-input").val();	  
 
    $("#word-form").val("");
  });

});

var pigLatin = function(word) {
	var consonant = 'bcdfghjklmnpqrstvwxyz';
	var vowel = 'aeiou';
	var firstLetter = [];
	

	if(vowel.indexOf(word[0]) > -1) {
		$("div#results").append("<p>" + word + 'ay' + "</p>");

	} else {
		for (var i=0; consonant.indexOf(word[i]) > -1; i++) {
			
			if((word[i] === 'q') && (word[i+1] === 'u')) {
			return word.substring(i+2) + firstLetter.join("") + "quay";
			
		} 
			firstLetter.push(word[i]);
		}
	} return word.substring(i) + firstLetter.join("") + 'ay'; 
};

var pigLatinPhrase = function(word) {
	var english = word.split(" ");
	var baconWords = [];

english.forEach(function(word) {
	baconWords.push(pigLatin(word));
	
});	

return baconWords.join(" ");
  
};
