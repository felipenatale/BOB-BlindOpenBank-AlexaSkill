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
        let firstName = getAttr(handlerInput, 'nome');
        let balance = apiResponse.response.Data.Balance[0].Amount.Amount;
        let creditLine = apiResponse.response.Data.Balance[0].CreditLine[0].Amount.Amount;

        return handlerInput.responseBuilder
            //.speak(firstName + ', ' + msg.msgBalanceSafra + ' ' + sayMoneyNumber(balance, true) + '!' + msg.sayTransactions)
            .speak(firstName + ', ' + msg.msgBalanceSafra + ' ' + sayMoneyNumber(balance, true) + '! ' + msg.creditLine + ' ' + sayMoneyNumber(creditLine, false))
            .reprompt(msg.whatElseHelp)
            .getResponse();
            
    }
};