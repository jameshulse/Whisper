var request = require('request');

module.exports = function synonym(input, callback) {
    console.log('input', input);
    
    let parts = input.split(' ');

    request.get(`https://wordsapiv1.p.mashape.com/words/${parts[0]}`, function (error, response, body) {
        console.log(body);

        callback(`${body.synonyms[0]} ${parts.slice(1).join(' ')}`);
    });
}