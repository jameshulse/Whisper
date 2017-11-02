var request = require("request");

let translateUrl = 'url with api key';

let sendTranslation = (text, from, to, callback) => {
    request.post({
        url: translateUrl,
        json: true,
        body: {
            q: text,
            source: from,
            target: to
        }
    }, function (error, response, body) {
        callback(body.data.translations[0].translatedText);
    });
};

module.exports = function translate(input, callback) {
    sendTranslation(input, 'en', 'de', (translated) => {
        sendTranslation(translated, 'de', 'en', (original) => {
            callback(original);
        });
    });
}
