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
