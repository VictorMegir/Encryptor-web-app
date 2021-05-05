const router = require('express').Router();
const ciphers = require('../encryptions/ciphers');

// @route /ciphers GET
// @desc Returns all the available ciphers.
// @access Public

router.get('/ciphers', (req, res) => {
    res.send(Object.keys(ciphers));
});


// @route /encrypt/:cipher POST
// @desc Receives the cipher as parameter and the text as body. 
//  Encrypts the text using the cipher and returns the encrypted text.
// @access Public

router.post('/encrypt/:cipher', (req, res) => {
    const { text } = req.body;
    const cipher = new ciphers[req.params.cipher]();
    res.json(cipher.encrypt(text));
});

// @route /decrypt/:cipher POST
// @desc Receives the cipher as parameter and the text as body.
//  Decrypts the text using the cipher and returns the decrypted text.
// @access Public

router.post('/decrypt/:cipher', (req, res) => {
    const { text } = req.body;
    const cipher = new ciphers[req.params.cipher]();
    res.json(cipher.decrypt(text));
});

// @route /stack/:sequence POST
// @desc Receives a sequence parameter that represents the operations that will be performed sequentially.
//  Performs the operations and returns the resulting text.
//  Example sequence: eatbash-dcaesar-erot13
// @access Public

router.post('/stack/:sequence', (req, res) => {
    const { text } = req.body;
    const { sequence } = req.params;

    const opperations = sequence.split("-");
    var intermediateText = text;

    opperations.forEach(operation => {
        const cipherName = operation.slice(1, operation.length);
        try {
            const cipher = new ciphers[cipherName]();

            if (operation[0] === 'e') intermediateText = cipher.encrypt(intermediateText);
            else if (operation[0] === 'd') intermediateText = cipher.encrypt(intermediateText);
            else res.status(404);
        } catch(error) {
            res.status(404);
        }
    });
    res.json(intermediateText);
});

module.exports = router;