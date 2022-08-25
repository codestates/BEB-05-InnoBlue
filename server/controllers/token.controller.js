const { User } = require('../models');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
const {
    TOKEN_CONTRACT_ADDR,
    TOKEN_CONTRACT_ABI
} = require('../global_variables');


const tokenTransfer = async(req, res, next) => { // 게시글 작성
    // const result = await Post.create({
    //     userId: req.body.userId,
    //     nickname: req.body.nickname,
    //     title: req.body.title,
    //     content: req.body.content,
    // });

    // if (!result) {
    //     res.status(400).send({ data: null, message: '에러'})
    //     return;
    // }

    // const incentive = 1;
    // const tokenContract = await new web3.eth.Contract(
    //     TOKEN_CONTRACT_ABI,
    //     TOKEN_CONTRACT_ADDR,
    //     {from: process.env.SERVER_ADDRESS}
    // );
    // const user = await User.findOne({
    //     where: {
    //         id: req.body.userId
    //     }
    // })
    // const data = await tokenContract.methods.transfer(user.address, incentive).encodeABI();    
    // const rawTransaction = {"to": TOKEN_CONTRACT_ADDR, "gas": 1000000, "data": data};
    // const signedTx = await web3.eth.accounts.signTransaction(rawTransaction, process.env.SERVER_PRIVATE_KEY);
    // await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    // const token_amount = await tokenContract.methods.balanceOf(user.address).call();
    // const server_token_amount = await tokenContract.methods.balanceOf(process.env.SERVER_ADDRESS).call();

    // console.log(token_amount);
    // console.log(server_token_amount);

    // // await User.update({token_amount:server_token_amount}, {where: {address:process.env.SERVER_ADDRESS}});
    // await User.update({token_amount: token_amount}, {where: {address: user.address}});
    res.status(201).json({
        message: "게시글 작성 완료! 토큰 보상이 지급되었습니다.",
        // data: { id: user.email, token_amount: token_amount},
    })
}

module.exports = {
    tokenTransfer
}