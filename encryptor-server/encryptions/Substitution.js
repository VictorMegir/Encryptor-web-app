class Substitution
{
    constructor(valuesString, keysString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz')
    {
        this.substitution = {}
        var keys = keysString.split('');
        var values = valuesString.split('');
        keys.forEach((key, i) => this.substitution[key] = values[i]);
    }

    substitute(input, sub = this.substitution)
    {
        var result = '';
        input.split('').forEach(char => {
            if(sub[char]) result += sub[char];
            else result += char;
        });
        return result;
    }

    reverse(sub = this.substitution)
    {
        var result = {};
        for(var key in sub) { result[sub[key]] = key }
        return result;
    }
}

module.exports = Substitution;