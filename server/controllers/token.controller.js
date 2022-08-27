const { User } = require('../models');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
const {
    TOKEN_CONTRACT_ADDR,
    TOKEN_CONTRACT_ABI
} = require('../global_variables');

const _faucet = async(to) => {
    const amount = 1e18;
    const nonce = await web3.eth.getTransactionCount(process.env.FAUCET_ADDRESS, 'latest');
    const rawTransaction = {"to": to, "value": amount, "gas": 1000000, "nonce": nonce};
    const signedTx = await web3.eth.accounts.signTransaction(rawTransaction, process.env.FAUCET_PRIVATE_KEY);
    await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    const wei_amount = await web3.eth.getBalance(to);
    const eth_amount = await web3.utils.fromWei(wei_amount);

    return await User.update({eth_amount: eth_amount}, {where: {address: to}});
}

const faucet = async(req, res, next) => {
    const user = await User.findOne({
        where: {
            id: req.body.id
        }
    })

    const to = user.address;
    const result = await _faucet(to);
    const wei_amount = await web3.eth.getBalance(to);
    const eth_amount = await web3.utils.fromWei(wei_amount);

    if(result){
        res.status(201).json({
            message: "이더리움 지급 완료!",
            data: { address: user.address, eth_amount: eth_amount},
        })
    }else{
        res.status(400).send("이더리움 지급 에러 발생")
    }
}

const tokenTransfer = async(req, res, next) => { // 게시글 작성
    const user = await User.findOne({
        where: {
            id: req.body.id
        }
    })

    const receiver = await User.findOne({
        where: {
            email: req.body.email
        }
    })

    const to = receiver.address;
    const amount = req.body.amount;

    const tokenContract = await new web3.eth.Contract(
        TOKEN_CONTRACT_ABI,
        TOKEN_CONTRACT_ADDR,
        {from: user.address}
    );

    await web3.eth.personal.unlockAccount(user.address, user.password, 600);
    await tokenContract.methods.transfer(to, amount).send();
    const token_amount = await tokenContract.methods.balanceOf(user.address).call();
    const receiver_token_amount = await tokenContract.methods.balanceOf(to).call();

    await User.update({token_amount: token_amount}, {where: {address: user.address}});
    const result = await User.update({token_amount: receiver_token_amount}, {where: {address: to}});
    if(result){
        res.status(200).json({
            message: "토큰 전송이 완료되었습니다.",
            data: { id: user.email, token_amount: token_amount},
        });
    } else{
        res.status(400).send("토큰 전송이 실패했습니다.");
    }
}

module.exports = {
    tokenTransfer,
    faucet,
    _faucet
}