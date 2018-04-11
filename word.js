const letter = require('./letter');

const word = function(chars) {
	this.chars = createSmartLetters(chars);
	this.display = function() {
		let currentLetters = '';
		for (let i = 0; i < this.chars.length; i++) {
			console.log('====================================');
			console.log(this.chars[i].showLetter());
			console.log('====================================');
			currentLetters += this.chars[i].showLetter() + ' ';
		}
		return currentLetters;
	};
	this.checkLetter = function(guessChar) {
		for (let i = 0; i < this.chars.length; i++) {
			this.chars[i].checkLetter(guessChar);
		}
	};
	this.completeWord = function() {
		for (let i = 0; i < this.chars.length; i++) {
			if (!this.chars[i].guess()) {
				return false;
			}
		}
		return true;
	};

	function createSmartLetters(chars) {
		let createChars = [];
		for (let i = 0; i < chars.length; i++) {
			createChars.push(new letter(chars[i]));
		}
		return createChars;
	}
};

var test = new word('Ryan');

// console.log(test.display());
test.checkLetter('R');
// console.log(test);
console.log(test.display());

module.exports = word;
