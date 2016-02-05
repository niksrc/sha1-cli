#!/usr/bin/env node
'use strict';
var meow = require('meow');
var sha1Cli = require('./');

var cli = meow([
	'Usage',
	'  $ sha1-cli [input]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ sha1-cli',
	'  unicorns & rainbows',
	'  $ sha1-cli ponies',
	'  ponies & rainbows'
]);

console.log(sha1Cli(cli.input[0] || 'unicorns'));
