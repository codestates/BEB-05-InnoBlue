const {User} = require('../models');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
const tokenController = require("./token.controller");

const signup = async(req, res, next) => {
    try {
        const { email, nickname, password } = req.body;

        await User.findOrCreate({
            where: { email:email },
            defaults: {
                nickname: nickname,
                password: password,
                address: '',
                token_amount: 0,
                eth_amount: 0
            }
        }).then(async ([user, created])=>{
            if(!created){
                res.status(409).send("이미 가입된 회원입니다.");
            } else{
                const address = await web3.eth.personal.newAccount(password);
            
                User.update({address:address}, {where: {email:email}})
                .then(async (result)=>{
                    await tokenController._faucet(address);
                    res.status(201).json({
                        message: "회원가입이 완료되었습니다.",
                        data: { id: user.email, address: address},
                    })
                }).catch((err)=> console.error(err));
            }
        });
    } catch(e) {
        throw Error(e);
    }
};

const userinfo = async(req, res, next) => {
    const user = await User.findOne({
        where: {
            id: req.params.userId
        }
    });

    if(user){
        res.status(200).json({
            message: "유저 정보 조회 완료",
            id: user.id,
            email: user.email,
            nickname: user.nickname,
            address: user.address,
            token_amount: user.token_amount,
            eth_amount: user.eth_amount,
            createdAt: user.createdAt
        })
    }else{
        res.status(400).send("유저 정보 조회 실패");
    }
}

module.exports = {
    signup,
    userinfo
};