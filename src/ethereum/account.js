import { web3 } from './index';

export const createAccount = async (password) => {
	// const response = await web3.eth.personal.newAccount(password);
	const response = web3.eth.accounts.create("password")	
	console.log('response account.js', response);
	console.log('address', response.address);
	console.log('privateKey', response.privateKey);
	// 0xb48D3ec744831Ff7A1EAb67C9AF6Ba544C5c111C
	// 0xb75d62b51055474d8100ba797e9d05167de4934eecebcc5f1623a78b0c23df1e
	return response;
}

export const showAccounts = async () => {
	const response = await web3.eth.getAccounts()
	// const accounts = web3.eth.accounts;
	console.log('response', response);
	return response;
	// console.log('='.repeat(100));
	// console.log('eth', web3.eth);
	// console.log('accounts', accounts);
	// return accounts;
}