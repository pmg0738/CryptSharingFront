import web3 from './web3';

// 送金 transfer
export const pay = async (toAddress, value) => {
	//const myAddress = localStorage.getItem("address");
	// const myAddress = "0x9A01Ea13233a0D33F385e3682665CBC51E771e40";
	const myAddress = "0xe964F018D5007Be827ed6b1C28a394493d090508";

	const response = await web3.eth.sendTransaction({
		from: myAddress,
		to: toAddress,
		value: value
	})
	console.log('pay', response)
	return response;
}


// 残高確認
export const showBalance = async () => {
	//const myAddress = localStorage.getItem("address");
	// const myAddress = "0xe964F018D5007Be827ed6b1C28a394493d090508";
	// const myAddress = "0x2e993dcfB0108C875268585f19235C9671B4Da77";
	const myAddress = "0xb48D3ec744831Ff7A1EAb67C9AF6Ba544C5c111C"
	const balance = await web3.eth.getBalance(myAddress);

	// console.log("=".repeat(100));
	console.log('balance', balance)

	return balance;
}
