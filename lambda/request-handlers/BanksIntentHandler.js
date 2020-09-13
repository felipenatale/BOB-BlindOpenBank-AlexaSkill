const Alexa = require('ask-sdk-core');
const msg = require('../app-messages');

module.exports = {
    canHandle(handlerInput) {
        
        return Alexa.getIntentName(handlerInput.requestEnvelope) === 'BancosCadastrados';
        
    },
    handle(handlerInput) {

        return handlerInput.responseBuilder
            .speak(msg.enabledBanks)
            .reprompt(msg.whatElseHelp)
            .getResponse();
            
    }
};