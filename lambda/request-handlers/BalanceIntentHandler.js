const Alexa = require('ask-sdk-core');
const msg = require('../app-messages');
const { getAttr, clearAttr } = require('../utils/sessionHandler.js');
const sayMoneyNumber = require('../utils/sayMoneyNumber');

module.exports = {
    canHandle(handlerInput) {
        
        //From LaunchIntent and said 'Sim'
        const yesIntentFromLaunch = Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.YesIntent' && getAttr(handlerInput, 'lastQuestion') === 'consulta-saldo-launch';
        
        //From ConsultaSaldo intent
        const intentBalance = Alexa.getIntentName(handlerInput.requestEnvelope) === 'ConsultaSaldo';
        
        //Clear lastQuestion
        if(yesIntentFromLaunch){
            clearAttr(handlerInput, 'lastQuestion');
        }

        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' && (yesIntentFromLaunch || intentBalance);
        
    },
    handle(handlerInput) {
        
        //Consultar saldo
        let balance = -1050.55;

        return handlerInput.responseBuilder
            .speak('Seu saldo está ' + sayMoneyNumber(balance) + '!')
            .reprompt(msg.whatElseHelp)
            .getResponse();
            
    }
};