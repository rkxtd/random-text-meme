[![Build Status](https://travis-ci.org/xcomanche/random-text-meme.svg?branch=master)](https://travis-ci.org/xcomanche/random-text-meme)
[![Coverage Status](https://coveralls.io/repos/github/xcomanche/random-text-meme/badge.svg?branch=master)](https://coveralls.io/github/xcomanche/random-text-meme?branch=master)
[![npm version](http://img.shields.io/npm/v/random-text-meme.svg?style=flat)](https://www.npmjs.com/package/random-text-meme "View this project on npm")
[![CodeClimate](http://img.shields.io/codeclimate/github/xcomanche/random-text-meme.svg?style=flat)](https://codeclimate.com/github/xcomanche/random-text-meme
"CodeClimate")
[![dependencies Status](https://david-dm.org/xcomanche/random-text-meme/status.svg)](https://david-dm.org/xcomanche/random-text-meme)
[![devDependencies Status](https://david-dm.org/xcomanche/random-text-meme/dev-status.svg)](https://david-dm.org/xcomanche/random-text-meme?type=dev)
![](https://img.shields.io/bundlephobia/min/random-text-meme.svg)

# random-text-meme generator
## Usage
### Install
``npm i random-text-meme --save``
### Require
``const { getEmoji, getAllEmoji, getThemes } = require('random-text-meme');``
### Display emoji
* ``getEmoji('flip-table');`` => (╯°□°）╯︵ ┻━┻
* ``getEmoji();`` => ಠ_ಠ
* ``getThemes();`` => ['boo', 'bear', 'cat', 'dog', ...]
### Not Found
if for some reason dictionary not found, or emoji could not be found, default emoji: (╯°□°）╯︵ ᔭ0ᔭ would be returned.
### Test
``npm run test`` runs unit tests

## Api
* ``getEmoji`` - returns random emoji. theme name can be specified (than random emoji would be chosen from within a theme).
* ``getAllEmoji`` - returns all emoji.  theme name can be specified.
* ``getThemes`` - get list of all available themes.

# copyright
all emoji were found on the internet. Most copied from https://cutekaomoji.com website.
