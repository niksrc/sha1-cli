# sha1-cli [![Build Status](https://travis-ci.org/niksrc/sha1-cli.svg?branch=master)](https://travis-ci.org/niksrc/sha1-cli)

> CLI for comparing and calculating sha1sum for files


## Install

```
$ npm install --save sha1-cli
```


## Usage

```js
const sha1Cli = require('sha1-cli');

sha1Cli('unicorns.txt', {sha1: true}, (sum) => {
	console.log(sum)
	//=> 'c25db8c82904f163f1148c4a7e0b843601c49c9d'
});
```


## API

### sha1Cli(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### sha1

Type: `boolean`  
Default: `false`

Returns sha1 sum of the file.

##### sum

Type: `string`  
Default: `sha1.txt`

Compares sha1 sum of the file with this file.

## CLI

```
$ npm install --global sha1-cli
```

```
$ sha1-cli --help

	Usage
    sha1-cli [input]

  Options
    --sum  file to compare sha1 sum. [Default: sha1.txt]
    --sha1 display sha1 sum of given file.

  Examples
    $ sha1-cli ponies --sha1
    c25db8c82904f163f1148c4a7e0b843601c49c9d
    $ sha1-cli ponies --sum rainbow.sha1.txt
    Passed :)

```


## License

MIT © [Nikhil Srivastava](http://niksrc.github.io)
