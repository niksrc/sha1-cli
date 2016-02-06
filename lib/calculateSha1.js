var stream = require('fs').createReadStream;
var sha1sum = require('./sha1');

function calculate(filename, callback) {
	var readStream = stream(filename);

	readStream.on('data', function (chunk) {
		sha1sum.update(chunk);
	});

	readStream.on('end', function () {
		callback(null, sha1sum.sum());
	});

	readStream.on('error', function () {
		callback(true);
	});
}

module.exports = calculate;
