var calculate = require('./calculateSha1');
var find = require('./givenSum');

function compare(file, sumFile, callback) {
	find(sumFile, function (err, givenSum) {
		if (err) {
			callback(true);
			return;
		}

		calculate(file, function (error, sum) {
			if (error) {
				callback(true);
				return;
			}
			callback(null, sum === givenSum.trim());
		});
	});
}

module.exports = compare;
