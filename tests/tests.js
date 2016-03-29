'use strict';

const assert = require('assert');
const regex = require('../index.js');

describe('IDN allowed code points regex', function() {
	it('matches expected code points', function() {
		// U+06A1 ARABIC LETTER DOTLESS FEH
		assert(regex.test('\u06A1'));
	});
	it('doesn’t match known banned code points', function() {
		// U+1F631 FACE SCREAMING IN FEAR
		assert(!regex.test('\uD83D\uDE31'));
	});
});
