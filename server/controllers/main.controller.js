exports.main_get = async(req, res, next) => {
    try {
        res.status(200).send("Hello World!");
    } catch(e) {
        throw Error(e);
    }
}