import test from 'ava';
import fn from './';

var sha1sum = '6663746aea8cb18b78c1792297b4eedc2d7d2187';
var invalid = 'file not found';

test.cb('calculate sha1', t => {
	fn('./lib/sha1.js', {sha1: true}, (sum) => {
		t.is(sum, sha1sum);
		t.end();
	});
});

test.cb('fail for non existing files', t => {
	fn('./lib/sha1s.js', {sha1: true}, (sum) => {
		t.is(sum, invalid);
		t.end();
	});
});
