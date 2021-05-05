const Substitution = require('./Substitution');

class Rot13 extends Substitution
{
    constructor() { super('ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba') };
    encrypt(input) { return this.substitute(input) };
    decrypt(input) { return this.substitute(input) };
}

module.exports = Rot13;