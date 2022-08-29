const { User, NFT } = require('../models');
const axios = require("axios");
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

    if(result){
        res.status(201).json({
            message: "이더리움 지급 완료!",
            data: { address: user.address, eth_amount: user.eth_amount},
        })
    }else{
        res.status(400).send("이더리움 지급 에러 발생")
    }
}

const _tokenTransfer = async(user, to, amount) => {
    const tokenContract = await new web3.eth.Contract(
        TOKEN_CONTRACT_ABI,
        TOKEN_CONTRACT_ADDR,
        {from: user.address}
    );

    await web3.eth.personal.unlockAccount(user.address, user.password, 600);
    await tokenContract.methods.transfer(to, amount).send();
    const token_amount = await tokenContract.methods.balanceOf(user.address).call();
    const receiver_token_amount = await tokenContract.methods.balanceOf(to).call();

    await User.update({token_amount: receiver_token_amount}, {where: {address: to}});
    await User.update({token_amount: token_amount}, {where: {address: user.address}});
    return token_amount;
};

const tokenTransfer = async(req, res, next) => { // 게시글 작성
    const user = await User.findOne({
        where: {
            address: req.body.address
        }
    });
    const receiver = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    const amount = req.body.amount;
    const to = receiver.address;    

    const result = _tokenTransfer(user, to, amount);
    if(result){
        res.status(200).send("토큰 전송이 완료되었습니다.");
    } else{
        res.status(400).send("토큰 전송이 실패했습니다.");
    }
}

const mint = async (req, res, next) => {
    // console.log(req.body)
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


    // approve
    await web3.eth.personal.unlockAccount(user.address, user.password, 600);
    const result_ = await tokenContract.methods.approve(process.env.NFT_CONTRACT_ADDR, 100).send();
    // console.log(result_.events);

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
    
    const tokenId = result.events.Transfer.returnValues.tokenId;
    console.log(result.transactionHash);
    const nft_amount = await NFTContract.methods.balanceOf(user.address).call();
    const tx_hash = result.transactionHash;
    const token_amount = await tokenContract.methods.balanceOf(user.address).call();
    const wei_amount = await web3.eth.getBalance(user.address);
    const eth_amount = Web3.utils.fromWei(wei_amount);

    await User.update({token_amount: token_amount, eth_amount: eth_amount}, {where: {address: user.address}});
    await NFT.create({
        userId: user.id,
        tokenId: tokenId,
        title: req.body.title,
        tx_hash: tx_hash,
        tokenURI: req.body.tokenURI,
        price: 1
    })

    res.status(201).json({
        message: "NFT 민팅 완료!",
        data: { id: user.email, nft_amount: nft_amount},
    })
}

const metadata = async (req, res, next) => {
    
    const nft = await NFT.findOne({
        where: {
            tokenId: req.params.tokenId
        }
    });
    // console.log(nft);

    if(nft){
        const owner = await User.findOne({
            where:{
                id: nft.userId
            }
        })
        const response = await axios.get(nft.tokenURI);
        const tokenMetadata = response.data;
        tokenMetadata.image = tokenMetadata.image.replace("ipfs://", "https://ipfs.io/ipfs/");
        res.status(200).json({
            ... tokenMetadata,
            message: "nft 정보 조회 완료",
            ownerId: owner.id,
            email: owner.email,
            nickname: owner.nickname,
            price: nft.price,
            on_sale: nft.on_sale,
            createdAt: nft.createdAt
        });
    }else{
        res.status(400).send("nft 정보 조회 실패");
    }
}

const count = async(req, res, next)=>{
    const amount = await NFT.count();
    res.status(200).send(`${amount}`);    
}

const buyNFT = async(req, res, next) => {
    const user = await User.findOne({
        where: {
            address: req.body.address
        }
    })
    const owner = await User.findOne({
        where: {
            email: req.body.owner
        }
    })
    await _tokenTransfer(user, owner.address, req.body.price);

    const NFTContract = await new web3.eth.Contract(
        NFT_CONTRACT_ABI,
        NFT_CONTRACT_ADDR,
        {from: owner.address}
    );
    let ownerADDR = await NFTContract.methods.ownerOf(req.body.tokenId).call();
    console.log(ownerADDR);
    await web3.eth.personal.unlockAccount(owner.address, owner.password, 600);
    await NFTContract.methods.transferFrom(owner.address, user.address, req.body.tokenId).send();
    ownerADDR = await NFTContract.methods.ownerOf(req.body.tokenId).call();
    console.log(ownerADDR);
    const result = await NFT.update({userId: user.id, on_sale: false}, {where: {tokenId: req.body.tokenId}});
    if(result){
        res.status(200).send("nft 구매 완료");
    } else{
        res.status(400).send("nft 구매 에러 발생");
    }
}

const sellNFT = async(req, res, next) => {
    const result = await NFT.update({on_sale: true, price: req.body.price}, {where: {tokenId: req.body.tokenId}});
    if(result){
        res.status(200).send("nft 판매 등록 완료");
    } else{
        res.status(400).send("nft 판매 등록 에러 발생");
    }
}

const cancelSale = async(req, res, next) => {
    const result = await NFT.update({on_sale: false}, {where: {tokenId: req.body.tokenId}});
    if(result){
        res.status(200).send("nft 판매 취소 완료");
    } else{
        res.status(400).send("nft 판매 취소 에러 발생");
    }
}

module.exports = {
    tokenTransfer,
    faucet,
    _faucet,
    mint,
    metadata,
    count,
    sellNFT,
    buyNFT,
    cancelSale,
    _tokenTransfer
}