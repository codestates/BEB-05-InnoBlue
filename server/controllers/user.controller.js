const {User} = require('../models');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
// const {
//     TOKEN_CONTRACT_ADDR,
//     TOKEN_CONTRACT_ABI
// } = require('../global_variables');


const signup= async(req, res, next) => {
    // const tokenContract = await new web3.eth.Contract(
    //     TOKEN_CONTRACT_ABI,
    //     TOKEN_CONTRACT_ADDR,
    // );

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
                // await tokenContract.methods.approve(address, 100).call();   

                User.update({address:address}, {where: {email:email}})
                .then((result)=>{
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

module.exports = {
    signup
};