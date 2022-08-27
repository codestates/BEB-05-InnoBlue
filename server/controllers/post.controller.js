const { User, Post } = require('../models');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
const {
    TOKEN_CONTRACT_ADDR,
    TOKEN_CONTRACT_ABI
} = require('../global_variables');


const postlist = async(req, res, next) => { // 게시글 전체 리스트

    const result = await Post.findAll({
        order: [['id','ASC']],            // id기준 오름차순 정렬
        limit:10,
        raw: true  
    });
    if (!result) {
        res.status(400).send({ data: null, message: '에러'})
    } else {
        res.status(200).json({ data: result })
    }
}

const writepost = async(req, res, next) => { // 게시글 작성
    const result = await Post.create({
        userId: req.body.userId,
        nickname: req.body.nickname,
        title: req.body.title,
        content: req.body.content,
    });

    if (!result) {
        res.status(400).send({ data: null, message: '에러'})
        return;
    }

    const incentive = 1;
    const tokenContract = await new web3.eth.Contract(
        TOKEN_CONTRACT_ABI,
        TOKEN_CONTRACT_ADDR,
        {from: process.env.SERVER_ADDRESS}
    );
    const user = await User.findOne({
        where: {
            id: req.body.userId
        }
    })
    const data = await tokenContract.methods.transfer(user.address, incentive).encodeABI();    
    const rawTransaction = {"to": TOKEN_CONTRACT_ADDR, "gas": 1000000, "data": data};
    const signedTx = await web3.eth.accounts.signTransaction(rawTransaction, process.env.SERVER_PRIVATE_KEY);
    await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    const token_amount = await tokenContract.methods.balanceOf(user.address).call();
    const server_token_amount = await tokenContract.methods.balanceOf(process.env.SERVER_ADDRESS).call();

    console.log(token_amount);
    console.log(server_token_amount);

    // await User.update({token_amount:server_token_amount}, {where: {address:process.env.SERVER_ADDRESS}});
    await User.update({token_amount: token_amount}, {where: {address: user.address}});
    res.status(201).json({
        message: "게시글 작성 완료! 토큰 보상이 지급되었습니다.",
        data: { id: user.email, token_amount: token_amount},
    })
}

const readpost = async(req, res, next) => { // 게시글 조회
    const body = req.body;

    const result = await Post.findOne({
        where: {
            id: body.id
        }, raw: true
    });
    if (!result) {
        res.status(400).send({ data: null, message: '에러'})
    } else {
        res.status(200).json({ data: result, message: '게시글 조회 완료' })
    }
}

const updatepost = async(req, res, next) => { // 게시글 수정
    const body = req.body;

    const result = await Post.update({
        content: body.content},
        {where: {
            id: body.id,
        }
    });
    if (!result) {
        res.status(400).send({ data: null, message: '에러'})
    } else {
        res.status(200).json({ data: result, message: '게시글 수정 완료' })
    }
}

const delpost = async(req, res, next) => { // 게시글 삭제
    const body = req.body;

    const result = await Post.destroy({
        where: {
            id: body.id,
        }
    });
    if (!result) {
        res.status(400).send({ data: null, message: '에러'})
    } else {
        res.status(200).json({ data: result, message: '게시글 삭제 완료' })
    }
}

module.exports = {
    postlist,
    writepost,
    readpost,
    updatepost,
    delpost
}
/*exports.user_post = async(req, res, next) => {
    const body = req.body;

    const result = await Post.findAll({
        where: {
            userId: body.userId
        },
        offset: 0 + (body.page - 1) * 10, // offset설정으로 페이지에 맞는 글 찾기
        limit: 10,                        // 10개만 보여주기
        order: [['id','ASC']],            // id기준 오름차순 정렬
        raw: true                         // DB에서 field 정보만 가져오기
    });
    if (!result) {
        res.status(400).send({ data: null, message: '에러'})
    } else {
        res.status(200).json({ data: result })
    }
}*/