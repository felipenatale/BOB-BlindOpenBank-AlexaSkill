const Alexa = require('ask-sdk-core');
const msg = require('../app-messages');

module.exports = {
    canHandle(handlerInput) {
        
        const yesIntentFromLaunch = Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.YesIntent';
        const intentBalance = Alexa.getIntentName(handlerInput.requestEnvelope) === 'ConsultaSaldo';
        
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' && (yesIntentFromLaunch || intentBalance);
        
    },
    handle(handlerInput) {

        return handlerInput.responseBuilder
            .speak("Seu saldo é de 0 reais!")
            .reprompt("Deseja mais alguma ação?")
            .getResponse();
            
    }
};