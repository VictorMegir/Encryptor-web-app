const Rot13 = require('./Rot13');
const Atbash = require('./Atbash');
const Caesar = require('./Caesar');
const Affine = require('./Affine');
const Baconian = require('./Baconian');

const ciphers = {
    'rot13': Rot13,
    'atbash': Atbash,
    'caesar': Caesar,
    'affine': Affine,
    'baconian': Baconian
};

module.exports = ciphers;