const mongoose = require("mongoose")


const connectDb = (uri) => {
    // console.log("Db Connected")
    return mongoose.connect(uri)
}

module.exports = connectDb