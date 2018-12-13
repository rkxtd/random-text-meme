const random = require('random');
const dict = require('./emoji.json');
let cache = false;
const NOT_FOUND_EMOJI = `(╯°□°）╯︵ ᔭ0ᔭ`;

const loadEmoji = (theme) => {
    if (theme) {
        return dict[theme] || [];
    } else {
        if (cache) return cache;
        cache = Object.keys(dict).reduce((memo, acc) => {
            return [...memo, ...dict[acc]];
        }, []);

        return cache;
    }
};

module.exports.getEmoji = (theme = '') => {
    const emoji = loadEmoji(theme);
    const i = random.int(0, emoji.length - 1);
    return emoji[i] || NOT_FOUND_EMOJI;
};

module.exports.getAllEmoji = loadEmoji;

module.exports.getThemes = () => {
    return Object.keys(dict);
};
