const Substitution = require('./Substitution');

class Caesar extends Substitution
{
    constructor() 
    {
        super(valueString = 'XYZABCDEFGHIJKLMNOPQRSTUVWxyzabcdefghijklmnopqrstuvw');
        this.reverseSubstitution = this.reverse();
    };

    encrypt(input) { return this.substitute(input) };
    decrypt(input) { return this.substitute(input, this.reverseSubstitution) };
}

module.exports = Caesar;