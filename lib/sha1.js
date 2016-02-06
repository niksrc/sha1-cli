var crypto = require('crypto');

var sha1sum = crypto.createHash('sha1');

function update(data) {
	sha1sum.update(data);
}

function sum() {
	return sha1sum.digest('hex');
}

module.exports = {
	update: update,
	sum: sum
};
