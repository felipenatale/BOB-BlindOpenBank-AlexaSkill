const Alexa = require('ask-sdk-core');
const msg = require('../app-messages');
const sayMoneyNumber = require('../utils/sayMoneyNumber');
const bobApi = require('../utils/bobApi');

module.exports = {
    canHandle(handlerInput) {
        
        //From ConsultaExtrato intent or ConsultaExtratoDias intent
        return Alexa.getIntentName(handlerInput.requestEnvelope) === 'ConsultaExtrato' || Alexa.getIntentName(handlerInput.requestEnvelope) === 'ConsultaExtratoDias';

    },
    async handle(handlerInput) {
        
        let apiResponse, transactions, speakOutput;
        
        //Today transactions
        if(Alexa.getIntentName(handlerInput.requestEnvelope) === 'ConsultaExtrato'){
            apiResponse = await bobApi(handlerInput, 'today-transactions');
            transactions = apiResponse.transactions;
            speakOutput = msg.yoursTransactionsOf + ' hoje. ';
            
        //Multiple-days transactions
        } else {
            const daysAgo = Alexa.getSlotValue(handlerInput.requestEnvelope, 'daysAgo');
            apiResponse = await bobApi(handlerInput, 'transactions', {daysAgo});
            speakOutput = msg.yoursTransactionsOf + ' ' + daysAgo + ' dia' + (daysAgo===1?'':'s') + ' atrás. ';
        }

        //Verify no transations
        if(transactions.length === 0){
            speakOutput += msg.thereIsNoTransactions;
        
        //List transaction
        } else {
            for(let i=0;i<transactions.length;i++){
                speakOutput += transactions[i][0] + ' de ' + sayMoneyNumber(transactions[i][1],false) + ' em ' + transactions[i][2] + '. ';
            }
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(msg.whatElseHelp)
            .getResponse();

    }
};