const { User } = require('../models');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

exports.init_server = async () => {
    const accounts = await web3.eth.getAccounts();
    const address = accounts[0];

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