const service = require('../services/registerService')

const register = async (req, res) =>{
    service.register(req)
    .then((result)=>{
        res.json({status: 'success', data: result})
    })
    .catch(err => res.json({status: 'error', data: err.message}))
}

const login = async (req, res) =>{
    service.login(req)
    .then((result)=>{
        res.json({status : 'success', data : result})
    })
    .catch(err=> res.json({status: 'error', data: err.message}))
}
const read = (req, res) => {
    service.read(
        req
    ).then((result) => {
        res.json({status: 'success', data: result})
    })
    .catch(err => res.json({status: 'error', data: err.message}))
}

module.exports = {
    register,
    login,
    read
}