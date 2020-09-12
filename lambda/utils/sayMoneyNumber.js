const msg = require('../app-messages');

module.exports = function(number, saySignal){
    
    let signal = (number > 0);
    
    number = Math.abs(number);

    let intNumber = Math.floor(number);
    let cents = Math.round(100 * (number - intNumber));
    
    let response = '';
    
    if(number === 0){
        
        response += msg.emptyBalance;
        
    } else {
        
        if(saySignal){
            if(signal){
                response += msg.positiveBalance + ' ';
            } else {
                response += msg.negativaBalance + ' ';
            }
        }
        
        response += intNumber;
        response += ' ' + (intNumber===1?'real':'reais');
        
        if(cents > 0){
            response += ' e ' + cents + ' ' + (cents===1?'centavo':'centavos');
        }
        
    }
    
    return response.trim();
}