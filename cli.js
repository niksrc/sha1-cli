#!/usr/bin/env node
'use strict';
var meow = require('meow');
var sha1Cli = require('./');

var cli = meow([
	'Usage',
	'  $ sha1-cli [input]',
	'',
	'Options',
	'  --sum  file to compare sha1 sum. [Default: sha1.txt]',
	'  --sha1 display sha1 sum of given file.',
	'',
	'Examples',
	'  $ sha1-cli ponies --sha1',
	'  c25db8c82904f163f1148c4a7e0b843601c49c9d',
	'  $ sha1-cli ponies --sum rainbow.sha1.txt',
	'  Passed :)'
]);

if (typeof cli.input[0] === 'string') {
	sha1Cli(cli.input[0], cli.flags, console.log);
} else {
	console.log('  Specify a input file\n' + cli.help);
}
