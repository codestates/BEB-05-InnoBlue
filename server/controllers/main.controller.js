const models = require('../models');
const Web3 = require('web3');
const {
    NFT_CONTRACT_ADDR,
    TOKEN_CONTRACT_ADDR,
    NFT_CONTRACT_ABI,
    TOKEN_CONTRACT_ABI
} = require('../global_variables');

exports.init_server = async () => {
    const [result, fields] = await models.server.get();
    if (!result || result.length == 0) {
        const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
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

        const accounts = await web3.eth.getAccounts();
        const address = accounts[0];
        if (address != process.env.SERVER_ADDRESS) {
            throw new Error("SERVER_ADDRESS is not the first address on your ganache network");
        }
        const token_amount = 0; // TODO: 나중에 ERC20 토큰 생성하고 해당 토큰 balance를 가져오는 함수를 호출하도록 변경
        const eth_amount = web3.utils.fromWei(await web3.eth.getBalance(address));
        const created_at = new Date();
        console.log(created_at);
        const [result, fields] = await models.user.create(
            process.env.SERVER_NICKNAME,
            process.env.SERVER_PASSWORD,
            address,
            token_amount,
            eth_amount,
            created_at,
        );
        console.log(result);//dictionary 형태로 나오도록 알아보고 바꾸기
    }
}

exports.main_get = async(req, res, next) => {
    try {
        res.status(200).send("Hello World!");
    } catch(e) {
        throw Error(e);
    }
}