const Substitution = require('./Substitution');

class Affine extends Substitution
{
    constructor() 
    {
        super('INSXCHMRWBGLQVAFKPUZEJOTYDinsxchmrwbglqvafkpuzejotyd');
        this.reverseSubstitution = this.reverse();
    };

    encrypt(input) { return this.substitute(input) };
    decrypt(input) { return this.substitute(input, this.reverseSubstitution) };
}

module.exports = Affine;