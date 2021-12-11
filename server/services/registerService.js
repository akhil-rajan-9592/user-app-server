const db = require('../model/model')
const bcrypt = require("bcrypt");
const { reject } = require('bcrypt/promises');
//const hash = require('../middlewares/hashGenerator')
const register = async (req)=>{
    return new Promise(async (resolve, reject)=>{
        let regiuser = await db.user.findOne({ mail : req.body.mail})
        if(regiuser){
            reject({ message : 'User already exist'})
            return
        }
        const salt = await bcrypt.genSalt(10);
        resolve(
            new db.user(Object.assign(req.body, {
                password : await bcrypt.hash(req.body.password, salt) 
            })).save()
        )
    })
}

const login = async (req)=>{
    return new Promise(async (resolve, reject)=>{
        const duplicate = await db.user.findOne({ mail: req.body.mail })
        if (!duplicate) {
            reject({ message: 'Invalid Email/Password' })
            return
        }
        const validPassword = await bcrypt.compare(req.body.password, duplicate.password)
        if (!validPassword) {
            reject({ message: 'Invalid Email/Password' })
            return
        }
        resolve(duplicate)
    })
}

const read = async (req) => {
    return new Promise(async (resolve, reject) => {
        let user = await db.user.findById(req.params.id)
        if (user) resolve(user)
        reject({message: 'not found'})
    })
}
module.exports = {
    register,
    login,
    read
}