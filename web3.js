var Web3 = require('web3');
var HDWalletProvider = require('truffle-hdwallet-provider');

let web3;
// const provider = new Web3.providers.HttpProvider(
//     "https://ropsten.infura.io/v3/5ca247e0854a46238b58915f7c41d2fd"
// );

const provider = new HDWalletProvider(
    "input your mnemonice",
    "input your endpoint"
)

web3 = new Web3(provider);

module.exports = web3;