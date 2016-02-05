# sha1-cli [![Build Status](https://travis-ci.org/niksrc/sha1-cli.svg?branch=master)](https://travis-ci.org/niksrc/sha1-cli)

> My bedazzling module


## Install

```
$ npm install --save sha1-cli
```


## Usage

```js
const sha1Cli = require('sha1-cli');

sha1Cli('unicorns');
//=> 'unicorns & rainbows'
```


## API

### sha1Cli(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global sha1-cli
```

```
$ sha1-cli --help

  Usage
    sha1-cli [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ sha1-cli
    unicorns & rainbows
    $ sha1-cli ponies
    ponies & rainbows
```


## License

MIT © [Nikhil Srivastava](http://niksrc.github.io)
