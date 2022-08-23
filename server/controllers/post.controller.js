const { Post } = require('../models');

const postlist = async(req, res, next) => { // 게시글 전체 리스트
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
}

const writepost = async(req, res, next) => { // 게시글 작성
    const body = req.body;

        const result = await Post.create({
            userId: body.inputUserId,
            nickname: body.inputNickname,
            title: body.inputTitle,
            content: body.inputContent,
        });
        if (!result) {
             res.status(400).send({ data: null, message: '에러'})
        } else {
            res.status(200).json({ data: result, message: '게시글 작성 완료' })
        }
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