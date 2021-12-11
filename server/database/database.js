const mongoose = require('mongoose')

const connect = ()=>{
    mongoose.connect('mongodb://localhost:27017/userapp',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Successfully connected to database"))
    .catch(console.error);
}
module.exports = connect