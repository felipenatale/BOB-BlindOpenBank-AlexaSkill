/**
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
**/

const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = require('./request-handlers/LaunchRequestHandler');
const BalanceIntentHandler = require('./request-handlers/BalanceIntentHandler');

const HelpHandler = require('./request-handlers/HelpHandler');
const CancelAndStopIntentHandler = require('./request-handlers/CancelAndStopIntentHandler');
const FallbackIntentHandler = require('./request-handlers/FallbackIntentHandler');
const SessionEndedRequestHandler = require('./request-handlers/SessionEndedRequestHandler');
const IntentReflectorHandler = require('./request-handlers/IntentReflectorHandler');
const ErrorHandler = require('./request-handlers/ErrorHandler');

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
**/
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        BalanceIntentHandler,
        HelpHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(ErrorHandler)
    .withCustomUserAgent('BOB-BANK/ALEXA-SKILL/v0.1')
    .lambda();