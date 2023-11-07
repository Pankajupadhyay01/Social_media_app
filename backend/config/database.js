const mongoose = require("mongoose");
const mongodb = require("mongodb")

exports.connectiondb = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Connection is Sucessful");
    }).catch((err) => {
        console.log(err);
    })
}
