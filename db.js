const mongoose = require('mongoose')


const mdb = async () => {
    await mongoose
    .connect("mongodb://localhost:27017/secm")
    .then(()=> console.log("mongoDB Connected🚀🔥"))
    .catch((err)=> console.log(err))
}



module.exports = mdb;

