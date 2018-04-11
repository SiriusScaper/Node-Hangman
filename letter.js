const smartLetter = function(dumbletter) {
	this.value = dumbletter;
	this.guessed = false;
	this.showLetter = function() {
		if (this.guessed) {
			return this.letter;
		} else {
			return '_';
		}
	};
	this.checkLetter = function(dumbletter) {
		if (this.value === dumbletter) {
			this.guessed = true;
		}
	};
	this.guess = function() {
		return this.guessed;
	};
};

module.exports = smartLetter;
