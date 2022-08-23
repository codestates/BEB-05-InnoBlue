const { User } = require('../models');

exports.user_login = async(req, res, next) => {
    const body = req.body;

    const result = await User.findOne({
        where: {
            email: body.email,
            password: body.password
        }
    });
    if (!result) {
        res.status(400).send({ data: null, message: '로그인 실패'})
    } else {
        req.session.email = result.email;
        res.status(200).json({ data: result, message: '로그인에 성공하였습니다.' })
    }
}