const randomTextMeme = require("./index");

// One Random Emoji.
console.log(randomTextMeme.getEmoji());

// One Random Emoji from specified theme.
console.log(randomTextMeme.getEmoji('shrug'));

// All Emoji from specified theme.
console.log(randomTextMeme.getAllEmoji('cat'));

// All Emoji we have in dictionary.
console.log(randomTextMeme.getAllEmoji());

// List of themes
console.log(randomTextMeme.getThemes());
