class Baconian
{
    constructor() 
    {
        this.substitution = {};

        var keysString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var keys = keysString.split('');

        var valuesString = 'aaaaaaaaabaaabaaaabbaabaaaababaabbaaabbbabaaaabaabababaababbabbaaabbababbbaabbbbbaaaabaaabbaababaabbbabaabababbabbababbbbbaaabbaab';
        var values = [];
        for( var i = 0; i < valuesString.length; i += 5 ) {
            values.push(valuesString.slice(i, i+5));
        }
        values = values.concat(values);

        keys.forEach((key, i) => this.substitution[key] = values[i]);
        this.reverseSubstitution = this.reverse();
    };

    reverse(sub = this.substitution)
    {
        var result = {};
        for(var key in sub) { result[sub[key]] = key };
        return result;
    }

    encrypt(input)
    {
        var result = '';
        input.split('').forEach(char => {
            if(this.substitution[char]) result += this.substitution[char];
            else result += char;
        });
        return result;
    }

    decrypt(input)
    {
        var result = '';
        for( var i = 0; i < input.length; i ++ ) 
        {
            if(!this.substitution[input[i]]) {
                result += input[i];
            }
            else if(this.reverseSubstitution[input.slice(i, i+5)]) {
                result += this.reverseSubstitution[input.slice(i, i+5)];
                i += 4;
            }
            else {
                result += '';
            }
        }
        return result;
    }
}

module.exports = Baconian;