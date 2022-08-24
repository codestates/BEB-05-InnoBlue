exports.user_logout = async(req, res, next) => {

    if (!req.session.email) {
        res.status(400).send({ data: null, message: 'not authorized' })
    } else {
        req.session.destroy();
        res.status(200).json({ data: null, message: '로그아웃'})
    }
}