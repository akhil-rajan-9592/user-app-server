const mongoose = require('mongoose')

const user = mongoose.model('user',{
    name : String,
    mail : String,
    password : String,
    usertype : String
})

const pdfFiles = mongoose.model('pdfFiles',{
    userid : { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    filename : { type: String},
    pdffile : { type: String},
    date: { type: Date},
})

module.exports = {
    user,
    pdfFiles
}