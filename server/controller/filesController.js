const files = require("../services/filesService");
const add = async (req, res) => {
    files.add(req)
    .then((result) => {
        res.json({status: 'success', data: result})
    })
    .catch(err => res.json({status: 'error', data: err.message}))
}

const list = (req, res) => {
    files.list(
        req
    ).then((result) => {
        res.json({status: 'success', data: result})
    })
    .catch(err => res.json({status: 'error', data: err.message}))
}

module.exports = {
    add,
    list
}