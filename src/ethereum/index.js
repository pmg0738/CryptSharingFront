import { INFURA_API_KEY } from '../config.js';

const Web3 = require('web3');


// export const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/" + INFURA_API_KEY));
// export const web3 = new Web3(window.web3.currentProvider);
export const web3 = new Web3('wss://mainnet.infura.io/ws');

// console.log("WEB3", web3);
// export const web3 = new Web3(new web3.providers.HttpProvider('http://localhost:8545'));
// web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));