const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://shoaibmohtashim973:WlhEBVCBa4Myhnh5@cluster0.hf7fikt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const mongodb = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log('connected succesfully')
        }
    })

}
module.exports = mongodb;