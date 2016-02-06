var stream = require('fs').createReadStream;

function find(filename, callback) {
	var readStream = stream(filename);
	var sum = '';
	readStream.on('data', function (chunk) {
		sum += chunk;
	});

	readStream.on('end', function () {
		callback(null, sum);
	});

	readStream.on('error', function () {
		callback(true);
	});
}

module.exports = find;
