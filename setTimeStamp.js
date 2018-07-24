var web3 = require('./web3');
var contract_json = require('./build/TimeCard.json');

const contractAddress = "input your contract address";
const instance = new web3.eth.Contract(
    JSON.parse(contract_json.interface),
    contractAddress
);

exports.setTimeStamp = async (suicaId, date) => {
    instance.methods.setTimeStamp(suicaId, date)
        .send({
            from: 'input your wallet address',
            gas: 100000
        }, function(error, transactionHash){
            if(error) {
                console.log({error})
            }
            if(transactionHash) {
                console.log({transactionHash})
            }
        });
    
    return
}

