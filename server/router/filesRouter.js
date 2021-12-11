const route = require('express').Router()
const file = require('../middlewares/multer');
const files = require('../controller/filesController')

route.post('/add', file.upload.single('pdffile'), files.add)
route.get('/list', files.list)
module.exports = route