const db = require('../model/model');

const add = async (req) =>{
    return new Promise(async (resolve,reject)=>{
        if(!req.file){
            reject( { message: 'No PDF file found' } )
            return
        }
        let filename = await db.pdfFiles.findOne({ filename: req.body.filename })
        if (filename) {
            reject({ message: 'Already exist' })
            return
        }
        resolve( new db.pdfFiles({
            userid : req.body.userid,
            filename: req.body.filename,
            pdffile: 'http://localhost:5000/uploads/'+req.file.filename,
            date: Date.now()
        }).save() )
    })
}

const list = (req) => {
    return new Promise(async (resolve, reject) => {
        let filter = req.query.filter
        let page = req.query.page
        let limit = req.query.limit
        let xpage = page && limit ? (parseInt(req.query.page) - 1) * parseInt(req.query.limit) : undefined
        let xlimit = page && limit ? parseInt(req.query.limit) : undefined
        let sort = req.query.sort
        resolve(db.pdfFiles.find(filter).skip(xpage).limit(xlimit).sort(sort).populate('userid').exec())
    }) 
}

module.exports = {
    add,
    list
}