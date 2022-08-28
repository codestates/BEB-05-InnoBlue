const { User, NFT } = require('../models');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
const {
    TOKEN_CONTRACT_ADDR,
    TOKEN_CONTRACT_ABI,
    NFT_CONTRACT_ADDR,
    NFT_CONTRACT_ABI
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

const mint = async (req, res, next) => {
    // nickname, tokenURL 받아오기
    // 락 해제
    // 컨트랙트 객체 생성 erc20, erc721 둘 다
    // 토큰 양 설정
    // 서버 계정으로 민팅
    console.log(req.body)

    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    const tokenContract = await new web3.eth.Contract(
        TOKEN_CONTRACT_ABI,
        TOKEN_CONTRACT_ADDR,
        {from: user.address}
    );
    const NFTContract = await new web3.eth.Contract(
        NFT_CONTRACT_ABI,
        NFT_CONTRACT_ADDR,
        {from: process.env.SERVER_ADDRESS}
    );

    const price = 5;
    
    const token_amount = await tokenContract.methods.balanceOf(user.address).call();
    const wei_amount = await web3.eth.getBalance(user.address);
    const eth_amount = Web3.utils.fromWei(wei_amount);
    // const tx_hash = await ;

    // approve
    await web3.eth.personal.unlockAccount(user.address, user.password, 600);
    const result_ = await tokenContract.methods.approve(process.env.SERVER_ADDRESS, 100).send();
    console.log(result_.events);

    // mint
    const result = await NFTContract
        .methods
        .mintNFT(
            user.address,
            req.body.tokenURI
        )
        .send({
            value: Web3.utils.toWei('0.002', 'ether'),
            gas: 1500000,
            gasPrice: '3000000'
        });
    console.log(result.events.Transfer)

    const tokenId = result.events.Transfer.returnValues.tokenId;

    // const nft_amount = await NFTContract.methods.balanceOf(user.address).call();
    // console.log(nft_amount);

    // await User.update({token_amount: token_amount, eth_amount: eth_amount}, {where: {address: user.address}});
    await NFT.create({
        userId: user.id,
        tokenId: tokenId,
        title: req.body.title,
        tx_hash: tx_hash,
    })

    res.status(201).json({
        message: "게시글 작성 완료! 토큰 보상이 지급되었습니다.",
        data: { id: user.email, token_amount: token_amount},
    })
}

module.exports = {
    tokenTransfer,
    faucet,
    _faucet,
    mint
}