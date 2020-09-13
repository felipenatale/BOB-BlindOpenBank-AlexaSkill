const Alexa = require('ask-sdk-core');
const msg = require('../app-messages');
const { getAttr, clearAttr } = require('../utils/sessionHandler.js');
const sayMoneyNumber = require('../utils/sayMoneyNumber');
const bobApi = require('../utils/bobApi');

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
    async handle(handlerInput) {
        
        //Ask API
        let apiResponse = await bobApi(handlerInput, 'balance');
        
        //Get api response
        let firstName = apiResponse.firstName;
        let balance = apiResponse.balance;

        return handlerInput.responseBuilder
            .speak(firstName + ', ' + 'seu saldo está ' + sayMoneyNumber(balance, true) + '!' + msg.sayTransactions)
            .reprompt(msg.whatElseHelp)
            .getResponse();
            
    }
};