const { User } = require('../models');
const Web3 = require('web3');
const {
    NFT_CONTRACT_ADDR,
    TOKEN_CONTRACT_ADDR,
    NFT_CONTRACT_ABI,
    TOKEN_CONTRACT_ABI
} = require('../global_variables');


exports.init_server = async () => {
    const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
    const accounts = await web3.eth.getAccounts();
    const address = accounts[0];

    const nftContract = await new web3.eth.Contract(
        NFT_CONTRACT_ABI,
        NFT_CONTRACT_ADDR
    );
    const tokenContract = await new web3.eth.Contract(
        TOKEN_CONTRACT_ABI,
        TOKEN_CONTRACT_ADDR
    );
    const nftContractName = await nftContract.methods.name().call();
    const tokenContractName = await tokenContract.methods.name().call();
    console.log(nftContractName);
    console.log(tokenContractName);

    const [user, created] = await User.findOrCreate({
        where: { nickname:process.env.SERVER_NICKNAME },
        defaults: {
            email: "server@mail.com",
            password: process.env.SERVER_PASSWORD,
            address: address,
            token_amount: 0,
            eth_amount: web3.utils.fromWei(await web3.eth.getBalance(address))
        }
    });
}



exports.main_get = async(req, res, next) => {
    try {
        res.status(200).send("Hello World!");
    } catch(e) {
        throw Error(e);
    }
}