describe("pigLatin", function() {
	it("returns pig latin form of words that begin with a vowel", function() {
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

describe("pigLatinPhrase", function() {
	it("returns the pig latin form of two or more English words", function() {
		pigLatinPhrase("the squealing pig was our queen of lyrics").should.equal("ethay ealingsquay igpay asway ouray eenquay ofay icslyray");
	});
});
