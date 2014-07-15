describe("pigLatin", function() {
	it("returns pig latin form of words that begin with a vowel ('ay' added to end)", function() {
		pigLatin("animal").should.equal("animalay");
	});
	it("returns pig latin form of words that start with one or more consonant", function() {
		pigLatin("strong").should.equal("ongstray");
	});
	it("returns pig latin form of words that start with 'qu'", function() {
		pigLatin("queen").should.equal("eenquay");
	});
	it("returns pig latin form of words starting with a consonant, followed by 'qu'", function() {
		pigLatin("squeal").should.equal("ealsquay");
	});
});