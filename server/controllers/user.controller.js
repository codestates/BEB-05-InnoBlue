const models = require('../models');

exports.user_join = async(req, res, next) => {
    try {
        const { nickname, password } = req.body;
        const address = '';
        const token_amount = 0;
        const eth_amount = 0;
        const created_at = new Date();
        // 1. 블록체인 계정 생성
        //?
        // 2. DB에 저장
        models.user.create(
            nickname,
            password,
            address,
            token_amount,
            eth_amount,
            created_at,
            (error, result) => {
                if (error) {
                    res.status(500).send('Internal Server Error');
                } else {
                    res.status(200).json(result);
                }
            }
        );
    } catch(e) {
        throw Error(e);
    }
}

