var web3 = require('./web3');
var contract_json = require('./build/TimeCard.json');

const contractAddress = "input your wallet address";
const instance = new web3.eth.Contract(
    JSON.parse(contract_json.interface),
    contractAddress
);

exports.getSuicaId = async () => {
    const suicaId = await instance.methods.suicaId().call();
    console.log(suicaId);
    return suicaId;
}
