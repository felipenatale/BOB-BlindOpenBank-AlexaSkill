const Alexa = require('ask-sdk-core');
const msg = require('../app-messages');

//It will get all other not-compreensive/not-matched intents
module.exports = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        
        //const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        //const speakOutput = `Você acionou a trigger ${intentName}`;

        return handlerInput.responseBuilder
            .speak(msg.notCompreensive)
            .reprompt(msg.hiThere)
            .getResponse();
    }
}