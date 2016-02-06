'use strict';
var calculate = require('./lib/calculateSha1');
var compare = require('./lib/compare');

module.exports = function (str, opts, callback) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	opts = opts || {};

	if (opts.sha1) {
		calculate(str, function (err, sum) {
			if (err) {
				callback('file not found');
				return;
			}

			callback(sum);
		});
	} else {
		compare(str, opts.sum || 'sha1.txt', function (err, result) {
			if (err) {
				callback('file not found');
				return;
			}

			callback((result) ? 'passed' : 'failed');
		});
	}
};
